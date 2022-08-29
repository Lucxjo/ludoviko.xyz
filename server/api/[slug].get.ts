import { prisma } from "~/src/db/client";

export default defineEventHandler(async ({ req, res, context }) => {
	const data = await prisma.shortLink.findUnique({
		where: {
			slug: context.params.slug,
		},
	});
	res.setHeader("Content-Type", "application/json");

	if (!data) {
		res.statusCode = 404;
		return JSON.stringify({ message: "Error: not found", data: null });
	} else {
		res.statusCode = 200;
		return JSON.stringify({ message: "Success", data });
	}
});
