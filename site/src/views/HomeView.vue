<template>
	<div class="container shift">
		<div class="p-5 m-auto max-w-5xl lg:grid lg:grid-cols-6">
			<img
				src="/RingRingTechSupport.png"
				alt="Ludoviko"
				class="col-span-1 my-auto rounded-full"
			/>
			<div class="col-span-5">
				<CHeading
					weight="1"
					class="my-2 text-blue dark:text-blue-dark"
					:hero="true"
					>Saluton!</CHeading
				>
				<CHeading class="text-blue dark:text-blue-dark" :hero="true">
					I'm Ludoviko, rarely known as Luĉjo. (they/them)
				</CHeading>

				<div class="grid grid-cols-2 col-span-1">
					<div class="mx-auto">
						<CLink
							title="Matrix"
							class="mr-1"
							to="https://matrix.to/#/@ludoviko_:matrix.org"
						></CLink>
						<CLink
							class="mx-1"
							title="E-post"
							to="mailto:me@ludoviko.ch"
						/>
						<CLink
							class="mx-1"
							title="Mastodon"
							to="https://masto.nu/@Ludoviko"
						/>
					</div>

					<div class="mx-auto col-span-1">
						<a
							@click="switchToAbout"
							:class="
								aboutSectVisible
									? activeClasses
									: inactiveClasses
							"
							>About Me</a
						>
						<a
							@click="switchToSocial"
							:class="
								socialSectVisible
									? activeClasses
									: inactiveClasses
							"
							>Social</a
						>
					</div>
				</div>
			</div>
		</div>
		<CSect
			v-if="aboutSectVisible"
			title="About"
			sub="So a bit about me:"
			id="about"
		>
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
		<CSect v-if="projectsSectVisible" title="Projects" sub="" id="projects">
			<div class="grid grid-cols-2">
				<CCard
					v-for="project in projects"
					v-bind:key="project.title"
					:title="project.title"
					:desc="project.desc"
					:links="project.links"
				>
				</CCard>
			</div>
		</CSect>
		<CSect v-if="socialSectVisible" title="Social" id="social">
			<CText>
				Here are the places that I spend my time on the internet. Feel
				free to follow and chat on any of them!
			</CText>
			<ul>
				<li>
					<CLink
						:me="true"
						title="Mastodon"
						to="https://masto.nu/@Ludoviko"
					/>
				</li>
				<li>
					<CLink
						:me="true"
						title="GitHub"
						to="https://github.com/Lucxjo"
					/>
				</li>
				<li>
					<CLink
						:me="true"
						title="Matrix DM"
						to="https://matrix.to/#/@ludoviko_:matrix.org"
					/>
				</li>
				<li>
					<CLink
						title="Matrix Space"
						to="https://matrix.to/#/#ludos-space:matrix.org"
					/>
				</li>
				<li>
					<CLink
						:me="true"
						title="E-post"
						to="mailto:me@ludoviko.ch"
					/>
				</li>
				<li>
					<CLink
						:me="true"
						title="Twitter"
						to="https://twitter.com/Ludoviko_"
					/>
				</li>
			</ul>
			<CText>Switch Friend code: SW-1092-1929-2801</CText>
		</CSect>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

let age: number | undefined = undefined;

fetch("https://api.ludoviko.ch/v1/about/birthday/age")
	.then((res) => res.json())
	.then((data) => {
		age = data.age;
	})
	.catch((err) => {
		console.error(err);
	});

const aboutSectVisible = ref(false);
const projectsSectVisible = ref(false);
const socialSectVisible = ref(false);
const mcSectVisible = ref(false);

const activeClasses = `mx-1 underline hover:text-text-0 hover:dark:text-text-dark-0 text-blue dark:text-blue-dark  cursor-pointer`;
const inactiveClasses = `mx-1 underline text-text-0 dark:text-text-dark-0 hover:text-blue hover:dark:text-blue-dark cursor-pointer`;

const switchToAbout = () => {
	if (aboutSectVisible.value) {
		aboutSectVisible.value = false;
		projectsSectVisible.value = false;
		socialSectVisible.value = false;
		mcSectVisible.value = false;
	} else {
		aboutSectVisible.value = true;
		projectsSectVisible.value = false;
		socialSectVisible.value = false;
		mcSectVisible.value = false;
	}
};

const switchToProjects = () => {
	if (projectsSectVisible.value) {
		aboutSectVisible.value = false;
		projectsSectVisible.value = false;
		socialSectVisible.value = false;
		mcSectVisible.value = false;
	} else {
		aboutSectVisible.value = false;
		projectsSectVisible.value = true;
		socialSectVisible.value = false;
		mcSectVisible.value = false;
	}
};

const switchToSocial = () => {
	if (socialSectVisible.value) {
		aboutSectVisible.value = false;
		projectsSectVisible.value = false;
		socialSectVisible.value = false;
		mcSectVisible.value = false;
	} else {
		aboutSectVisible.value = false;
		projectsSectVisible.value = false;
		socialSectVisible.value = true;
		mcSectVisible.value = false;
	}
};

const switchToMC = () => {
	if (mcSectVisible.value) {
		aboutSectVisible.value = false;
		projectsSectVisible.value = false;
		socialSectVisible.value = false;
		mcSectVisible.value = false;
	} else {
		aboutSectVisible.value = false;
		projectsSectVisible.value = false;
		socialSectVisible.value = false;
		mcSectVisible.value = true;
	}
};

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
		title: "Ludoviko.ch",
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
