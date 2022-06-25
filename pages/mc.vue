<template>
	<div class="container">
		<Sect title="Minecraft Mods" id="mods">
			<p>
				I am currently only working on two Minecraft projects that have
				been released. However, I will be making more in the future that
				will primarily target the Fabric mod loader
			</p>
			<h2>Fabric</h2>
			<Card
				title="Kontrolo"
				desc="A Minecraft mod for the Fabric mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted. The mod also adds a GUI for you to add your own commands through a config file."
				:links="kFabLinks"
			/>
			<h2>Forge</h2>
			<Card
				title="Kontrolo"
				desc="A Minecraft mod for the Forge mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted. The mod also adds a GUI for you to add your own commands through a config file."
				:links="kForLinks"
			/>
		</Sect>
	</div>
</template>

<script setup>
useHead({
	title: "Minecraft"
})
const kFabLinks = [
	{
		title: "Source",
		to: "https://github.com/Lucxjo/Kontrolo-Fabric"
	},
	{
		title: "Download",
		to: "https://modrinth.com/mod/kontrolo"
	}
]

const kForLinks = [
	{
		title: "Source",
		to: "https://github.com/Lucxjo/Kontrolo-Forge"
	},
	{
		title: "Download",
		to: "https://modrinth.com/mod/kontrolo-forge"
	}
]
</script>
