<template>
	<div>
		<h1><NuxtLink to="/">Ludoviko</NuxtLink></h1>
		<NuxtPage />
	</div>
</template>

<script setup>
useHead({
	titleTemplate: (title) => {
		return title ? `${title} | Ludoviko` : "Ludoviko";
	},
});
</script>

<style lang="scss" scoped>
a {
	color: azure;
}
</style>
