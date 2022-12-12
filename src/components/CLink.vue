<template>
	<a
		v-if="to.includes('http')"
		target="_blank"
		:rel="to.includes('masto') ? 'me' : 'nofollow noreferrer'"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:href="to"
	>
		<p>{{ title }} →</p>
	</a>
	<a
		v-else-if="to.includes('mailto')"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:href="to"
	>
		<p>{{ title }} →</p>
	</a>
	<RouterLink
		v-else
		v-bind="$props"
		class="underline text-lg text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark"
		:to="to"
	>
		<p>{{ title }} →</p>
	</RouterLink>
</template>

<script>
export default {
	props: {
		title: String,
		to: String,
	},
};
</script>
