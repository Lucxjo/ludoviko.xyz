
export default defineEventHandler(async (event) => {
	event.res.setHeader("Content-Type", "application/json");

	await prisma.shortLink.delete({
		where: {
			slug: event.context.params.slug,
		}
	})

	return JSON.stringify({
		message: "Success",
		data: await prisma.shortLink.findUnique({ where: { slug: event.context.params.slug } }),
	});
})
