<template>
	<div class="container">
		<div class="hero">
			<img src="/RingRingTechSupport.png" alt="Ludoviko" />
			<h1>Saluton!</h1>
			<h2>
				Welcome to my website! I'm Ludoviko, rarely known as Luĉjo. I
				hope that you enjoy your stay here.
			</h2>
			<a
				href="https://liberapay.com/Ludoviko/donate"
				target="_blank"
				rel="nofollow noreferrer"
				><img
					alt="Donate with Liberapay"
					src="https://liberapay.com/assets/widgets/donate.svg"
					decoding="async"
					data-nimg="intrinsic"
			/></a>
		</div>
		<Sect title="About" sub="So a bit about me:" id="about">
			<ul>
				<li>Age: {{age}}</li>
				<li>Location: Europe</li>
				<li>Sexuality: Whatever it is, it isn't straight!</li>
				<li>Pronouns: they/them/theirs</li>
				<li>Gender: Male-ish</li>
				<li>Languages: en-GB, es-ES, eo-EO</li>
			</ul>
		</Sect>
		<Sect title="Projects" sub="" id="projects">
			<Card
				v-for="project in projects"
				:key="project.title"
				:title="project.title"
				:desc="project.desc"
				:links="project.links"
			>
			</Card>
		</Sect>
		<Sect title="Social" id="social">
			<p>
				Here are the places that I spend my time on the internet. Feel
				free to follow and chat on any of them!
			</p>
			<ul>
				<li class="link">
					<CLink
						title="Mastodon"
						to="https://mstdn.social/@Ludoviko"
					/>
				</li>
				<li class="link">
					<CLink title="GitHub" to="https://github.com/Lucxjo" />
				</li>
				<li class="link">
					<CLink
						title="Matrix DM"
						to="https://matrix.to/#/@ludoviko_:matrix.org"
					/>
				</li>
				<li class="link">
					<CLink
						title="Matrix Space"
						to="https://matrix.to/#/#ludos-space:matrix.org"
					/>
				</li>
				<li class="link">
					<CLink title="E-mail" to="mailto:me@ludoviko.ch" />
				</li>
				<li class="link">
					<CLink title="Twitter" to="https://twitter.com/Ludoviko_" />
				</li>
			</ul>
			<p>Switch Friend code: SW-1092-1929-2801</p>
		</Sect>
	</div>
</template>

<script setup>
const {data: age} = await useFetch('https://api.ludoviko.ch/v1/about/birthday/age')
console.log(age)
const projects = [
	{
		title: "VannerBasta",
		desc: 'A website to promote the Netflix TV programme "Young Royals". Not seen it yet? You totally should, there\'s a link on this website that will take you straight to Netflix!',
		links: [
			{
				title: "Source",
				to: "https://github.com/Lucxjo/friends-best",
			},
			{
				title: "View",
				to: "https://vannerba.st/",
			},
		],
	},
	{
		title: "Minecraft Projects",
		desc: "I have a couple of Minecraft mods, these can be found on a different page. Click the link below to view them!",
		links: [
			{
				title: "Mods",
				to: "/mc#mods",
			},
		],
	},
	{
		title: "Ludoviko.xyz/Ludoviko.ch",
		desc: "This website! Technically it is one of my projects, so it deserves to be in this list. Right? Built with NuxtJS.",
		links: [
			{
				title: "Source",
				to: "https://github.com/Lucxjo/ludoviko.xyz",
			},
		],
	},
	{
		title: "Diru (Discord Bot)",
		desc: "A Discord translation bot built in Go with Disgord. You can translate using either the DeepL API or Google Translate.",
		links: [
			{
				title: "Source",
				to: "https://github.com/Lucxjo/",
			},
			{
				title: "Invite to your guild",
				to: "https://discordapp.com/oauth2/authorize?client_id=944915663632355388&scope=bot&permissions=67454976",
			},
		],
	},
];
</script>

<style lang="scss" scoped>
.hero {
	background-color: #0e5faa;
	padding: 1rem;
	border-radius: 1rem;
	margin: 2rem;
	width: 80%;
}
</style>
