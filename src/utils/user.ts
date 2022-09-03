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

export enum UserError {
	USER_NOT_FOUND = "USER_NOT_FOUND",
	USER_ALREADY_EXISTS = "USER_ALREADY_EXISTS",
	USER_IN_DB = "USER_IN_DB",
	INCORRECT_PASSWORD = "INCORRECT_PASSWORD",
	UNKNOWN_DATABASE_ERROR = "UNKNOWN_DATABASE_ERROR",
	TOKEN_INVALID = "TOKEN_INVALID",
	PASSWORD_LENGTH = "PASSWORD_LENGTH",
}

export default class UserUtils {
	static async hashPassword(password: string): Promise<string> {
		if (!password || password.length < 8) {
			throw new Error(UserError.PASSWORD_LENGTH);
		}
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
		let user = await prisma.user.findUnique({ where: { username } });

		if (!user) {
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

				user = await prisma.user.findUnique({
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
							console.error(e);
							out.success = false;
							out.error = UserError.UNKNOWN_DATABASE_ERROR;
						});
				} else {
					out.success = false;
					out.error = UserError.USER_IN_DB;
				}
			}
		} else {
			out.success = false;
			out.error = UserError.USER_ALREADY_EXISTS;
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
				output.error = UserError.INCORRECT_PASSWORD;
			}
		} else {
			output.success = false;
			output.error = UserError.USER_NOT_FOUND;
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
						console.error(e);
						out.success = false;
						out.error = UserError.TOKEN_INVALID;
					});
			} else {
				out.success = false;
				out.error = UserError.INCORRECT_PASSWORD;
			}
		} else {
			out.success = false;
			out.error = UserError.USER_NOT_FOUND;
		}

		return out;
	}

	static async validatePassword(
		password: string,
		hash: string
	): Promise<boolean> {
		if (!password || password.length < 8) {
			throw new Error(UserError.PASSWORD_LENGTH);
		}
		return bcrypt.compare(password, hash);
	}

	static async generateToken(user: {
		id: string;
		username: string;
	}): Promise<Token> {
		if (process.env.JWT_SECRET === undefined)
			throw new Error("No JWT secret");
		const { id, username } = user;
		const token = jwt.sign(
			{ id, username },
			process.env.JWT_SECRET ??
				(process.env.NODE_ENV === "test" ? "testingKey" : "Error"),
			{
				expiresIn: `${EXPIRY_IN_DAYS}d`,
			}
		);
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
			throw new Error(UserError.TOKEN_INVALID);
		}
	}
}
