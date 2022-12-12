<template>
	<a
		v-if="p.to.includes('http')"
		target="_blank"
		:rel="p.to.includes('masto') ? 'me' : 'nofollow noreferrer'"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:href="p.to"
	>
		<span>{{ title }}{{ p.arrow ? " →" : "" }}</span>
	</a>
	<a
		v-else-if="p.to.includes('mailto')"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:href="p.to"
	>
		<span>{{ title }}{{ p.arrow ? " →" : "" }}</span>
	</a>
	<RouterLink
		v-else
		v-bind="$props"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:to="p.to"
	>
		<span>{{ p.title }}{{ p.arrow ? " →" : "" }}</span>
	</RouterLink>
</template>

<script setup lang="ts">
const p = defineProps({
	title: { type: String, required: true },
	to: { type: String, required: true },
	arrow: { type: Boolean, default: true },
});
</script>
