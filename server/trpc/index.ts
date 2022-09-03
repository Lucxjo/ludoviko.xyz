import { router as trpcRouter } from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/src/db/client";
import { Random } from "~~/src/utils/random";
import bcrypt from "bcrypt";
import UserUtils, { Token } from "~~/src/utils/user";

export const router = trpcRouter()
	.query("getSlugData", {
		input: z.object({
			slug: z.string(),
		}),
		async resolve({ input }) {
			const data = await prisma.shortLink.findUnique({
				where: {
					slug: input.slug,
				},
			});
			return { data };
		},
	})
	.mutation("createShortLink", {
		input: z.object({
			slug: z.string().optional(),
			url: z.string(),
			ownerId: z.string().optional(),
		}),
		output: z.object({
			success: z.boolean(),
			message: z.string().optional(),
		}),
		async resolve({ input }) {
			const slug =
				input.slug ??
				Random.generateRandomString({
					length: 6,
					latin_english_only: false,
				});
			try {
				await prisma.shortLink.create({
					data: {
						slug: slug,
						url: input.url,
						ownerId: input.ownerId,
					},
				});
				return {
					success: true,
					message: `The slug for ${input.url} is ${slug}`,
				};
			} catch (e) {
				console.error(e);
				return { success: false };
			}
		},
	})
	.mutation("updateShortLink", {
		input: z.object({
			slug: z.string(),
			url: z.string(),
		}),
		output: z.object({
			success: z.boolean(),
		}),
		async resolve({ input }) {
			try {
				await prisma.shortLink.update({
					where: {
						slug: input.slug,
					},
					data: {
						url: input.url,
					},
				});
				return { success: true };
			} catch (e) {
				console.error(e);
				return { success: false };
			}
		},
	})
	.mutation("deleteShortLink", {
		input: z.object({
			slug: z.string(),
		}),
		output: z.object({
			success: z.boolean(),
		}),
		async resolve({ input }) {
			try {
				await prisma.shortLink.delete({
					where: {
						slug: input.slug,
					},
				});

				return { success: true };
			} catch (e) {
				console.error(e);
				return { success: false };
			}
		},
	})
	.mutation("createUser", {
		input: z.object({
			username: z.string(),
			password: z.string().min(8),
		}),
		output: z.object({
			success: z.boolean(),
			error: z.any().optional(),
		}),
		async resolve({ input }) {
			const user = await UserUtils.createUser(
				input.username,
				input.password
			);
			return { success: user.success, error: user.error };
		},
	})
	.mutation("loginUser", {
		input: z.object({
			username: z.string(),
			password: z.string(),
		}),
		output: z.object({
			success: z.boolean(),
			error: z.any().optional(),
			token: z.any().optional(),
		}),
		async resolve({ input }) {
			const { success, error, token } = await UserUtils.loginUser(
				input.username,
				input.password
			);
			return {
				success,
				error,
				token: token
					? { token: token!.token, expiryInDays: token!.expiryInDays }
					: undefined,
			};
		},
	})
	.mutation("deleteUser", {
		input: z.object({
			username: z.string(),
			password: z.string().min(8),
		}),
		output: z.object({
			success: z.boolean(),
			error: z.any().optional(),
		}),
		async resolve({ input }) {
			const { success, error } = await UserUtils.deleteUser(
				input.username,
				input.password
			);
			return { success, error };
		},
	});

export type Router = typeof router;
