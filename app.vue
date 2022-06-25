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
});
</script>

<style lang="scss" scoped>
a {
	color: azure;
}
</style>
