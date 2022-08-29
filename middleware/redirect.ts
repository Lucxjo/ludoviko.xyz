export default defineNuxtRouteMiddleware((data) => {
	console.log(data.params.slug);
});
