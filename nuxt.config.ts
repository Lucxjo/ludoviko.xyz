import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['trpc-nuxt'],
	css: ["~/assets/styles/global.scss"],
	trpc: {
		baseURL: "http://localhost:3000",
	}
});
