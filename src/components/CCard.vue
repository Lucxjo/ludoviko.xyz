<template>
	<div class="p-5 m-5 border-4 rounded-xl border-blue dark:border-blue-dark">
		<CHeading class="text-2xl">{{ title }}</CHeading>
		<CText class="pt-2">{{ desc }}</CText>
		<div class="flex">
			<div v-for="link in links" :key="link" class="link pt-2 pr-2">
				<CLink :title="link.title" :to="link.to" />
			</div>
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
