<template>
	<nav id="top">
		<h1><NuxtLink to="/">Ludoviko</NuxtLink></h1>
	</nav>
	<NuxtPage />
	<footer>
		© 2020-2022 Ludoviko - The MIT License |
		<NuxtLink to="/privacy">Privacy</NuxtLink>
	</footer>
</template>

<script setup>
useHead({
	titleTemplate: (title) => {
		return title ? `${title} | Ludoviko` : "Ludoviko";
	},
	link: [{ rel: "icon", src: "/RingRingTechSupport.ico" }],
	meta: [
		{ property: "og:title", content: "Ludoviko" },
		{
			name: "description",
			content: "Ludoviko's little place on the internet",
		},
		{
			property: "og:description",
			content: "Ludoviko's little place on the internet",
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			property: "og:image",
			content: "https://ludoviko.ch/RingRingTechSupport.png",
		},
		{
			name: "keywords",
			content:
				"Ludoviko, Programming, Minecraft, Game Development, Java, Blog, Kotlin",
		},
		{
			property: "twitter:card",
			content: "summary",
		},
		{
			property: "twitter:site",
			content: "@Ludoviko_",
		},
		{
			property: "twitter:creator",
			content: "@Ludoviko_",
		},
	],
});
</script>

<style lang="scss" scoped>
a {
	color: azure;
}
</style>
