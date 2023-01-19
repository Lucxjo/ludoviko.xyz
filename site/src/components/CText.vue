<template>
	<p
		v-if="props.as === 'p'"
		class="text-lg text-text-0 dark:text-text-dark-0"
	>
		<slot></slot>
	</p>
	<li
		v-else-if="props.as === 'li'"
		class="text-lg text-text-0 dark:text-text-dark-0"
	>
		<slot></slot>
	</li>
</template>

<script setup lang="ts">
const props = defineProps({
	as: {
		type: String,
		required: false,
		default: "p",
	},
});
</script>
