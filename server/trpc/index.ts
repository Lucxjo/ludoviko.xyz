import { router as trpcRouter } from "@trpc/server";
import { z } from "zod";
import { prisma } from "~/src/db/client";

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
			slug: z.string(),
			url: z.string(),
		}),
		async resolve({ input }) {
			try {
				await prisma.shortLink.create({
					data: {
						slug: input.slug,
						url: input.url,
					},
				});
			} catch (e) {
				console.error(e);
			}
		},
	})
	.mutation("updateShortLink", {
		input: z.object({
			slug: z.string(),
			url: z.string(),
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
			} catch (e) {
				console.error(e);
			}
		},
	});
