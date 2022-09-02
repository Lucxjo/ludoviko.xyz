const DENIED = [/^\/dash\/?$/];

export default defineNuxtRouteMiddleware(async (to) => {
	if (!DENIED.some((route) => route.test(to.path))) {
		return;
	}

	const cookie = useCookie("ludo-web-auth");

	if (!cookie || !cookie.value) {
		return navigateTo("/access");
	}
});
