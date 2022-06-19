<template>
	<div class="card">
		<h2>{{ title }}</h2>
		<p>{{ desc }}</p>
		<div v-for="link in links" :key="link">
			<a
				v-if="link.isExternal"
				target="_blank"
				rel="nofollow noreferrer"
				:href="link.to"
			>
				<p>{{ link.title }} →</p>
			</a>
			<NuxtLink v-else v-bind="$props" :to="link.to">
				<p>{{ link.title }} →</p>
			</NuxtLink>
		</div>
	</div>
</template>

<script>
const Card = resolveComponent("Card");

export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		links: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.card {
	border-style: solid;
	border-width: 0.2rem;
	border-radius: 0.5rem;
	border-color: #39c4ff;
	padding-left: 1rem;
	margin: 1rem;
}

a {
	color: azure;
	transition: color 0.15s ease, color 0.15s ease;
}

a:hover {
	color: #39c4ff;
	transition: color 0.15s ease, color 0.15s ease;
}
</style>
