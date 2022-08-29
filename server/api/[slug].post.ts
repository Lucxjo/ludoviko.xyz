export default defineEventHandler(async (event) => {
	const { req, res, context } = event;
	const body: {
		url: string;
		update: boolean;
	} = await useBody(event);

	console.log(body.url);

	const data = await prisma.shortLink.findUnique({
		where: {
			slug: context.params.slug,
		},
	});
	res.setHeader("Content-Type", "application/json");

	if (!data && body.url) {
		await prisma.shortLink.create({
			data: {
				slug: context.params.slug,
				url: body.url,
			},
		});
		return JSON.stringify({
			message: "Success",
			data: await prisma.shortLink.findUnique({
				where: { slug: context.params.slug },
			}),
		});
	} else if (!data && !body.url) {
		return JSON.stringify({
			message: "Error: No 'url' field provided in the body",
		});
	} else if (data && body.url && body.update) {
		await prisma.shortLink.update({
			where: {
				slug: context.params.slug,
			},
			data: {
				url: body.url,
			},
		});
		return JSON.stringify({
			message: "Success",
			data: await prisma.shortLink.findUnique({
				where: { slug: context.params.slug },
			}),
		});
	} else if (data && body.url && !body.update) {
		return JSON.stringify({
			message: "Error: 'update' field is false and there is already a link with this slug",
			existingURL: data.url
		});
	} else {
		return JSON.stringify({
			message: "Error: Invalid request",
		});
	}
});
