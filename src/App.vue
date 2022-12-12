<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink
					class="text-5xl underline dark:text-text-dark-1 hover:text-blue dark:hover:text-blue-dark"
					to="/"
					>Ludoviko</RouterLink
				>
			</nav>
		</div>
	</header>
	<main>
		<RouterView />
	</main>
	<footer class="dark:text-text-dark-1">
		© 2020-2022 Ludoviko - The MIT License |
		<RouterLink
			class="underline hover:text-blue dark:hover:text-blue-dark"
			to="/privacy"
			>Privacy</RouterLink
		>
	</footer>
</template>
