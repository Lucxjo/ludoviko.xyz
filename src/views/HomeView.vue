<template>
	<div class="container">
		<div class="p-5 m-11 rounded-2xl bg-blue shadow-lg dark:bg-blue-dark">
			<img src="/RingRingTechSupport.png" alt="Ludoviko" />
			<CHeading weight="1" :hero="true">Saluton!</CHeading>
			<CHeading :hero="true">
				Welcome to my website! I'm Ludoviko, rarely known as Luĉjo. I
				hope that you enjoy your stay here.
			</CHeading>
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
		<CSect title="About" sub="So a bit about me:" id="about">
			<ul>
				<CText as="li">Age: {{ age || 23 }}</CText>
				<CText as="li">Location: Europe</CText>
				<CText as="li"
					>Sexuality: Whatever it is, it isn't straight!</CText
				>
				<CText as="li">Pronouns: they/them/theirs</CText>
				<CText as="li">Gender: Male-ish</CText>
				<CText as="li">Languages: en-GB, es-ES, eo-EO</CText>
			</ul>
		</CSect>
		<CSect title="Projects" sub="" id="projects">
			<CCard
				v-for="project in projects"
				v-bind:key="project.title"
				:title="project.title"
				:desc="project.desc"
				:links="project.links"
			>
			</CCard>
		</CSect>
		<CSect title="Social" id="social">
			<CText>
				Here are the places that I spend my time on the internet. Feel
				free to follow and chat on any of them!
			</CText>
			<ul>
				<li class="link">
					<CLink title="Mastodon" to="https://masto.nu/@Ludoviko" />
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
			<CText>Switch Friend code: SW-1092-1929-2801</CText>
		</CSect>
	</div>
</template>

<script setup lang="ts">
let age: number | undefined = undefined;

fetch("https://api.ludoviko.ch/v1/about/birthday/age")
	.then((res) => res.json())
	.then((data) => {
		age = data.age;
	})
	.catch((err) => {
		console.error(err);
	});

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
		desc: "This website! Technically it is one of my projects, so it deserves to be in this list. Right? Built with VueJS 3 + Vite.",
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
