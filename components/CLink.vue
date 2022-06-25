<template>
	<a
		v-if="to.includes('http')"
		target="_blank"
		rel="nofollow noreferrer"
		:href="to"
	>
		<p>{{ title }} →</p>
	</a>
	<NuxtLink v-else v-bind="$props" :to="to">
		<p>{{ title }} →</p>
	</NuxtLink>
</template>

<script>
export default {
	props: {
		title: String,
		to: String,
	},
};

</script>

<style lang="scss" scoped>
a {
	color: azure;
	transition: color 0.15s ease, color 0.15s ease;
}

a:hover {
	color: #39c4ff;
	transition: color 0.15s ease, color 0.15s ease;
}

p {
	max-width: fit-content !important;
	margin: 0;
}
</style>
