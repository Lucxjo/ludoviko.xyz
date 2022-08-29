import { useNuxtApp } from "#app";
import { sendRedirect } from "h3";

export default defineNuxtRouteMiddleware(async (data) => {
	const app = useNuxtApp();
	const resFetch:
		| {
				message: string;
				data: {
					url: string;
					slug: string;
					id: number;
					createdAt: string;
				};
		  }
		| { message: string; data: null } = await $fetch(
		`/api/${data.params.slug}`
	)
		.then(async (res) => {
			return res;
		})
		.catch(async () => {
			return { message: "Error: not found", data: null };
		});

	if (resFetch.message === "Success") {
		sendRedirect(app.ssrContext.event, resFetch.data.url);
	} else {
		return navigateTo(`/`);
	}
});
