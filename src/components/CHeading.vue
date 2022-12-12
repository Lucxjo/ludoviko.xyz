<template>
	<h1 v-if="props.weight === `1`" :class="h1Classes">
		<slot></slot>
	</h1>
	<h2 v-else :class="h2Classes">
		<slot></slot>
	</h2>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	weight: {
		type: String,
		required: true,
	},
	hero: {
		type: Boolean,
		required: false,
	},
});

const h1Classes = computed(() => {
	return props.hero === true
		? `text-5xl font-bold text-text-dark-0 dark:text-base-dark`
		: `text-5xl font-bold text-blue dark:text-blue-dark`;
});

const h2Classes = computed(() => {
	return props.hero === true
		? `text-2xl font-semibold text-text-dark-0 dark:text-base-dark`
		: `text-2xl font-semibold text-text-0 dark:text-text-dark-0`;
});
</script>
