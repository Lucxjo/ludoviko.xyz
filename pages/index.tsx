/** @format */

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import Image from 'next/image';
import {
	Box,
	Heading,
	Anchor,
	List,
	Card,
	Paragraph,
} from '@dracula/dracula-ui';
import en from '../lang/en';
import ProjectCard from '../components/project-card';
import LinkedListItem from '../components/linked-list-item';
import { InferGetStaticPropsType } from 'next';

export const getStaticProps = async () => {
	const res = await fetch('https://api.ludoviko.ch/v1/');
	const about = await res.json().then(data => data.about);
	const age = about.birthday.age;
	const { name, gender, sexuality, pronouns } = about;
	const preferred = pronouns.preferred;

	return {
		props: {
			name,
			gender,
			sexuality,
			preferred,
			age,
		},
		revalidate: 43200,
	};
};

export default function Home({
	name,
	gender,
	sexuality,
	preferred,
	age,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const t = en;

	return (
		<div
			className={styles.container}
			data-target="#navbar"
			data-spy="scroll">
			<Head>
				<title>{name}</title>
			</Head>

			<main className={styles.main}>
				<Card color="pinkPurple" rounded="lg" p="md" mt="lg" mx="md">
					<span
						className="drac-avatar drac-bg-green-transparent drac-text-green drac-avatar-lg-stroke"
						style={{ width: 95, height: 95 }}>
						<Image
							className="drac-avatar"
							title={name}
							src="https://cloudflare-ipfs.com/ipfs/QmVvWu3f2AegSd2bXz5X4vgj5XqmTXmarYTH4KASGhSF8j"
							alt="My user picture"
							width={90}
							height={90}
						/>
					</span>
					<Heading as="h1" size="2xl" color="black">
						Saluton!
					</Heading>
					<Heading size="xl" color="black">
						{t.welcome}
					</Heading>
					<p></p>
					<Link href="https://liberapay.com/Ludoviko/donate" passHref>
						<Anchor>
							<Image
								src="https://liberapay.com/assets/widgets/donate.svg"
								alt="Donate with Liberapay"
								width={90}
								height={30}
							/>
						</Anchor>
					</Link>
				</Card>

				<Card
					rounded="lg"
					p="md"
					m="md"
					color="blackSecondary"
					id="about">
					<Anchor href="/#about"></Anchor>
					<Box className="list-display">
						<Heading as="h1" size="2xl" color="pinkPurple">
							{t.about}
						</Heading>
						<Heading size="lg">So a bit about me:</Heading>
						<List variant="unordered" color="pink">
							<li className="drac-text drac-text-white">
								Age: {age}
							</li>
							<li className="drac-text drac-text-white">
								Location: Europe
							</li>
							<li className="drac-text drac-text-white">
								Sexuality: {sexuality}
							</li>
							<li className="drac-text drac-text-white">
								Pronouns: {preferred}
							</li>
							<li className="drac-text drac-text-white">
								Gender: {gender}
							</li>
							<li className="drac-text drac-text-white">
								Languages: en-GB, es-ES, eo-EO
							</li>
						</List>
					</Box>
				</Card>

				<Card
					rounded="lg"
					p="md"
					m="md"
					color="blackSecondary"
					id="projects">
					<Anchor href="/#projects"></Anchor>
					<Box className="list-display">
						<Heading as="h1" size="2xl" color="pinkPurple" m="md">
							{t.projects}
						</Heading>
						<ProjectCard
							title="Vänner Bäst"
							description="A website to promote the Netflix TV programme 'Young Royals'. Not seen it yet? You totally should, there's a link on this website that will take you straight to Netflix!"
							link0="https://github.com/Lucxjo/friends-best"
							link1="https://vannerba.st"
						/>
						<ProjectCard
							title="Arbúcies"
							description="A game project for the JVM written in Kotlin.
                The game is a rewrite of a game made by TheCherno on YouTube,
                this original project was made as a Java 2D game tutorial."
							link0="https://github.com/Lucxjo/Arbucies"
							link1="https://youtube.com/playlist?list=PLlrATfBNZ98eOOCk2fOFg7Qg5yoQfFAdf"
							link1Text="Original Playlist"
						/>
						<ProjectCard
							title="Minecraft Projects"
							description="I have a couple of Minecraft mods, these can be found on a different page. Click the link below to view them!
                I also have a server, this can be found on the same page as the mods at the bottom.
                The server link will jump you straight to that section!"
							link0="/mc/#mods"
							link0Text="Mods"
							link0Ext={false}
							link1="/mc/#server"
							link1Text="Server"
							link1Ext={false}
						/>
						<ProjectCard
							title="Ludoviko.xyz/Ludoviko.ch"
							description="This website! Technically it is one of my projects, so it deserves to be in this list. Right?
                Built in Next.js with Dracuala theming from the Dracula UI kit."
							link0="https://github.com/Lucxjo/ludoviko.xyz"
						/>
					</Box>
				</Card>

				<Card
					rounded="lg"
					p="md"
					m="md"
					color="blackSecondary"
					id="social">
					<Anchor href="/#social"></Anchor>
					<Box className="list-display">
						<Heading as="h1" size="2xl" color="pinkPurple">
							{t.social}
						</Heading>
						<Paragraph>
							Here are the places that I spend my time on the
							internet. Feel free to follow and chat on any of
							them!
						</Paragraph>
						<List variant="unordered" color="pink">
							<LinkedListItem
								href="https://mstdn.social/@Ludoviko"
								rel="me">
								Mastodon
							</LinkedListItem>
							<LinkedListItem
								isExternal
								href="https://github.com/Lucxjo">
								GitHub
							</LinkedListItem>
							<LinkedListItem
								isExternal
								href="https://matrix.to/#/@ludoviko_:matrix.org">
								[matrix] DM
							</LinkedListItem>
							<LinkedListItem
								isExternal
								href="https://matrix.to/#/#ludos-space:matrix.org">
								[matrix] Space
							</LinkedListItem>
							<LinkedListItem
								isExternal
								href="mailto:me@ludoviko.ch">
								E-mail
							</LinkedListItem>
							<LinkedListItem href="/discord">
								Discord servers
							</LinkedListItem>
						</List>
						<Paragraph mt="sm">
							Here are some others that I use less frequently:
						</Paragraph>
						<List variant="unordered" color="pink">
							<li className="drac-text drac-text-white">
								Switch Friend code: SW-1092-1929-2801
							</li>
							<LinkedListItem
								isExternal
								href="https://twitter.com/Ludoviko_">
								Twitter
							</LinkedListItem>
							<LinkedListItem
								isExternal
								href="https://www.twitch.tv/ludoviko_">
								Twitch.tv
							</LinkedListItem>
							<LinkedListItem
								isExternal
								href="https://pixelfed.de/Lucxjo">
								Pixelfed
							</LinkedListItem>
						</List>
					</Box>
				</Card>
			</main>
		</div>
	);
}
