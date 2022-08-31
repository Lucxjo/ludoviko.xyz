import { useNuxtApp } from "#app";
import { sendRedirect } from "h3";

export default defineNuxtRouteMiddleware(async (data) => {
	const app = useNuxtApp();
	const client = useClient();

	const trpcData = await client.query("getSlugData", {
		slug: data.params.slug as string,
	});

	if (trpcData.data) {
		sendRedirect(app.ssrContext!.event, trpcData.data.url);
	} else {
		return navigateTo(`/`);
	}
});
