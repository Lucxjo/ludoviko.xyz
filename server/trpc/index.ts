import { router as trpcRouter } from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/src/db/client";
import { Random } from "~/src/random";

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
			const slug = input.slug ?? Random.generateRandomString({length: 6, latin_english_only: false});
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
			let out: { success: boolean; error?: any } = {
				success: false,
			};
			// Allow many test users to be created
			if (process.env.NODE_ENV === "test" || "development") {
				try {
					await prisma.user.create({
						data: {
							username: input.username,
							password: input.password,
						},
					});
					out.success = true;
				} catch (e) {
					console.error(e);
					out.success = false;
				}

				const user = await prisma.user.findUnique({
					where: {
						username: input.username,
					},
				});
				console.log(user);
			} else {
				const users = await prisma.user.findMany();
				// Only allow one user to be created in production
				if (users.length === 0) {
					await prisma.user
						.create({
							data: {
								username: input.username,
								password: input.password,
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
		},
	})
	.mutation("deleteUser", {
		input: z.object({
			username: z.string(),
			password: z.string().min(8),
		}),
		output: z.object({
			success: z.boolean(),
		}),
		async resolve({ input }) {
			const user = await prisma.user.findUnique({
				where: {
					username: input.username,
				},
			});

			let output = { success: false };

			if (user && user.password === input.password) {
				try {
					await prisma.user.delete({
						where: {
							username: input.username,
						},
					});
					output.success = true;
				} catch (e) {
					console.error(e);
					output.success = false;
				}
			}
			return output;
		},
	});

export type Router = typeof router;
