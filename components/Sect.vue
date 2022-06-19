<template>
	<div :id="id" class="section">
		<h1>{{ title }}</h1>
		<h2>{{ sub }}</h2>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		sub: {
			type: String,
			required: true,
		},
		id: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.section h1 {
	color: #39c4ff;
}

.section {
	padding: 1rem;
	margin: 1.5rem;
	width: 80%;
	background-color: #5b5b5b;
	border-radius: 1rem;
}
</style>
