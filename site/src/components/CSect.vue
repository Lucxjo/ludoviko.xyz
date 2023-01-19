<template>
	<div
		:id="props.id"
		class="p-8 m-11 bg-base dark:bg-surface-dark-0 rounded-2xl shadow-lg"
	>
		<CHeading weight="1">{{ props.title }}</CHeading>
		<CHeading v-if="props.sub">{{ props.sub }}</CHeading>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	sub: {
		type: String,
		required: false,
	},
	id: {
		type: String,
		required: true,
	},
});
</script>
