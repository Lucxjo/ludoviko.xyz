import { prisma } from "~/src/db/client";

export default defineEventHandler(async ({ req, res, context }) => {
	const data = await prisma.shortLink.findUnique({
		where: {
			slug: context.params.slug,
		},
	});
	console.log(data);
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	return data ?? { id: null, createdAt: null, slug: null, url: null };
});
