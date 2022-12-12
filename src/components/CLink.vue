<template>
	<a
		v-if="props.to.includes('http')"
		target="_blank"
		:rel="to.includes('masto') ? 'me' : 'nofollow noreferrer'"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:href="to"
	>
		<span>{{ title }}{{ props.arrow ? " →" : "" }}</span>
	</a>
	<a
		v-else-if="props.to.includes('mailto')"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:href="props.to"
	>
		<span>{{ title }}{{ props.arrow ? " →" : "" }}</span>
	</a>
	<RouterLink
		v-else
		v-bind="$props"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:to="props.to"
	>
		<span>{{ props.title }}{{ props.arrow ? " →" : "" }}</span>
	</RouterLink>
</template>

<script setup lang="ts">
const props = defineProps({
	title: { String, required: true },
	to: { String, required: true },
	arrow: { Boolean, default: true },
});
</script>
