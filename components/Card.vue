<template>
	<div class="card">
		<h2>{{ title }}</h2>
		<p>{{ desc }}</p>
		<div v-for="link in links" :key="link" class="link cardLink">
			<CLink :title="link.title" :to="link.to" />
		</div>
	</div>
</template>

<script setup>
defineProps({
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
});
</script>

<style lang="scss" scoped>
.card {
	border-style: solid;
	border-width: 0.2rem;
	border-radius: 0.5rem;
	border-color: #39c4ff;
	padding: 0 1rem;
	margin: 1rem;
}

.cardLink {
	margin: 1rem 0;
}
</style>
