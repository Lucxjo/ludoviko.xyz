<template>
	<div class="card">
		<h2>{{ title }}</h2>
		<p>{{ desc }}</p>
		<div v-for="link in links" :key="link">
			<CLink :title="link.title" :to="link.to" />
		</div>
	</div>
</template>

<script>
import CLink from './CLink.vue';
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
    components: { CLink }
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
</style>
