<template>
	<div class="container">
		<h1>Access</h1>
		<form @submit.prevent>
			<input
				v-model="username"
				type="text"
				ref="username"
				id="username"
				name="username"
				placeholder="Username"
			/>
			<br />
			<input
				v-model="password"
				type="password"
				ref="password"
				name="password"
				id="password"
				placeholder="Password"
			/>
			<br />
			<button type="submit" @click="doTheAuthThing">Login</button>
		</form>
	</div>
</template>

<script setup lang="ts">
const username = useState("username", () => "");
const password = useState("password", () => "");

const doTheAuthThing = () => {
	console.log(username, password);
};
</script>
