import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { z } from "zod";
import { prisma } from "../../src/db/client";

const EXPIRY_IN_DAYS = 7;
export type Token = {
	token: string;
	expiryInDays: number;
};

export default class UserUtils {
	static async hashPassword(password: string): Promise<string> {
		return await bcrypt.hash(password, 10);
	}

	static async createUser(
		username: string,
		password: string
	): Promise<{
		id?: string;
		username?: string;
		success: boolean;
		error?: any;
	}> {
		let out: {
			id?: string;
			username?: string;
			success: boolean;
			error?: any;
		} = {
			success: false,
		};

		const hashedPassword = await UserUtils.hashPassword(password);

		// Allow many test users to be created
		if (process.env.NODE_ENV === "test" || "development") {
			try {
				await prisma.user.create({
					data: {
						username: username,
						password: hashedPassword,
					},
				});

				await prisma.user
					.findUnique({
						where: {
							username,
						},
						select: {
							id: true,
							username: true,
						},
					})
					.then((user) => {
						out.id = user?.id;
						out.username = user?.username;
						out.success = true;
					})
					.catch((e) => {
						out.error = e;
						out.success = false;
					});
			} catch (e) {
				console.error(e);
				out.success = false;
			}

			const user = await prisma.user.findUnique({
				where: {
					username: username,
				},
			});
			console.log(user);
		} else {
			const users = await prisma.user.findMany();
			const hashedPassword = await UserUtils.hashPassword(password);
			// Only allow one user to be created in production
			if (users.length === 0) {
				await prisma.user
					.create({
						data: {
							username: username,
							password: hashedPassword,
						},
					})
					.then(async () => {
						out.success = true;
					})
					.catch((e) => {
						out.success = false;
						out.error = e;
					});
			} else {
				out.success = false;
				out.error = "There is already a user in the database";
			}
		}
		return out;
	}

	static async deleteUser(
		username: string,
		password: string
	): Promise<{ success: boolean; error?: any }> {
		let output: { success: boolean; error?: any } = { success: false };

		const user = await prisma.user.findUnique({
			where: {
				username: username,
			},
		});
		if (user) {
			const valid_password = await UserUtils.validatePassword(
				password,
				user.password
			);

			if (user && valid_password) {
				try {
					await prisma.user.delete({
						where: {
							username: username,
						},
					});
					output.success = true;
				} catch (e) {
					console.error(e);
					output.success = false;
					output.error = e;
				}
			} else if (!valid_password) {
				output.success = false;
				output.error = "Invalid password";
			}
		} else {
			output.success = false;
			output.error = "User does not exist";
		}
		return output;
	}

	static async loginUser(username: string, password: string) {
		let out: { success: boolean; error?: any; token?: Token } = {
			success: false,
		};
		const user = await prisma.user.findUnique({
			where: {
				username,
			},
		});

		if (user) {
			const isPasswordValid = await UserUtils.validatePassword(
				password,
				user.password
			);
			if (isPasswordValid) {
				UserUtils.generateToken({
					id: "test",
					username: "test",
				})
					.then((token) => {
						out.success = true;
						out.token = token;
					})
					.catch((e) => {
						out.success = false;
						out.error = `Error generating token: ${e}`;
					});
			} else {
				out.success = false;
				out.error = "Invalid password";
			}
		} else {
			out.success = false;
			out.error = "User does not exist";
		}

		return out;
	}

	static async validatePassword(
		password: string,
		hash: string
	): Promise<boolean> {
		return bcrypt.compare(password, hash);
	}

	static async generateToken(user: {
		id: string;
		username: string;
	}): Promise<Token> {
		const { id, username } = user;
		const token = jwt.sign({ id, username }, process.env.JWT_SECRET!, {
			expiresIn: `${EXPIRY_IN_DAYS}d`,
		});
		return { token, expiryInDays: EXPIRY_IN_DAYS };
	}

	static async getUserFromToken(token: string) {
		try {
			const { id, username } = jwt.verify(
				token,
				process.env.JWT_SECRET!
			) as { id: string; username: string };
			return { id, username };
		} catch (error) {
			console.error(error);
			return undefined;
		}
	}
}
