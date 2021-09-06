import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { Box, Heading, Anchor, List, Card, Paragraph, Avatar } from '@dracula/dracula-ui'
import en from '../lang/en'
import ProjectCard from '../components/project-card'

export default function Home() {
  const t = en

  return (
    <div className={styles.container} data-target="#navbar" data-spy="scroll">
      <Head>
        <title>Ludoviko</title>
      </Head>

      <main className={styles.main}>
        <Card color="pinkPurple" rounded="lg" p="md" mt="lg" mx="md" >
          <span className="drac-avatar drac-bg-green-transparent drac-text-green drac-avatar-lg-stroke" style={{width: 95, height: 95}}>
            <Image className="drac-avatar" title="Ludoviko" src="/RingRingTechSupport.png" alt="My user picture" width={90} height={90} />
          </span>
          <Heading as="h1" size="2xl" color="black" >Saluton!</Heading>
          <Heading size="xl" color="black" >{t.welcome}</Heading>
          <p></p>
          <Link href="https://liberapay.com/Ludoviko/donate" passHref><Anchor><Image src="https://liberapay.com/assets/widgets/donate.svg" alt="Donate with Liberapay" width={90} height={30} /></Anchor></Link>
        </Card>

        <Card rounded="lg" p="md" m="md" color="blackSecondary" id="about" >
          <Anchor href="/#about"></Anchor>
          <Box className="list-display" >
            <Heading as="h1" size="2xl" color="pinkPurple" >{t.about}</Heading>
            <Heading size="lg" >So a bit about me:</Heading>
            <List variant="unordered" color="pink" >
              <li className="drac-text drac-text-white" >Age: 22</li>
              <li className="drac-text drac-text-white" >Location: Europe</li>
              <li className="drac-text drac-text-white" >Sexuality: Whatever it is, it isn't straight!</li>
              <li className="drac-text drac-text-white" >Pronouns: He/him, they/them</li>
              <li className="drac-text drac-text-white" >Gender: Male-ish</li>
              <li className="drac-text drac-text-white" >Languages: en-GB, es-ES, eo-EO</li>
            </List>
          </Box>
        </Card>

        <Card rounded="lg" p="md" m="md" color="blackSecondary" id="projects" >
          <Anchor href="/#projects"></Anchor>
          <Box className="list-display" >
            <Heading as="h1" size="2xl" color="pinkPurple" m="md" >{t.projects}</Heading>
            <ProjectCard
              title="Vänner Bäst"
              description="A website to promote the Netflix TV programme 'Young Royals'. Not seen it yet? You totally should, there's a link on this website that will take you straight to Netflix!"
              link0="https://github.com/Lucxjo/friends-best"
              link1="https://vannerba.st" />
            <ProjectCard
              title="Arbúcies"
              description="A game project for the JVM written in Kotlin.
                The game is a rewrite of a game made by TheCherno on YouTube,
                this original project was made as a Java 2D game tutorial."
              link0="https://github.com/Lucxjo/Arbucies"
              link1="https://youtube.com/playlist?list=PLlrATfBNZ98eOOCk2fOFg7Qg5yoQfFAdf"
              link1Text="Original Playlist" />
            <ProjectCard
              title="Minecraft Projects"
              description="I have a couple of Minecraft mods, these can be found on a different page. Click the link below to view them!
                I also have a server, this can be found on the same page as the mods at the bottom.
                The server link will jump you straight to that section!"
              link0="/mc/#mods"
              link0Text="Mods"
              link0Ext={false}
              link1='/mc/#server'
              link1Text="Server"
              link1Ext={false} />
            <ProjectCard
              title="Ludoviko.xyz/Ludoviko.ch"
              description="This website! Technically it is one of my projects, so it deserves to be in this list. Right?
                Built in Next.js with Dracuala theming from the Dracula UI kit."
              link0="https://github.com/Lucxjo/ludoviko.xyz" />
          </Box>
        </Card>

        <Card rounded="lg" p="md" m="md" color="blackSecondary" id="social" >
          <Anchor href="/#social"></Anchor>
          <Box className="list-display" >
            <Heading as="h1" size="2xl" color="pinkPurple" >{t.social}</Heading>
            <Paragraph >Here are the places that I spend my time on the internet. Feel free to follow and chat on any of them!</Paragraph>
            <List variant="unordered" color="pink" >
              <li className="drac-text drac-text-white" >
                <Link href="https://mstdn.social/@Ludoviko" passHref><Anchor isExternal={true} rel="me" color="pink" hoverColor="purple" >Mastodon</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://github.com/Lucxjo" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Github</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://matrix.to/#/@ludoviko:saluton.cc" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >[matrix]</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="mailto:me@ludoviko.xyz" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Email</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://discord.gg/RJuFxzkwbh" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Discord (co-own, stream focused)</Anchor></Link>
              </li>
            </List>
            <Paragraph mt="sm">Here are some others that I use less frequently:</Paragraph>
            <List variant="unordered" color="pink">
              <li className="drac-text drac-text-white" >Switch Friend code: SW-1092-1929-2801</li>
              <li className="drac-text drac-text-white" >
                <Link href="https://discord.gg/UZRyJrEPTU" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Discord (mine, project focus)</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://twitter.com/Ludoviko_" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Twitter</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://www.twitch.tv/ludoviko_" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Twitch.tv</Anchor></Link>
              </li>
              <li className="drac-text drac-text-white" >
                <Link href="https://pixelfed.de/Lucxjo" passHref><Anchor isExternal={true} color="pink" hoverColor="purple" >Pixelfed</Anchor></Link>
              </li>
            </List>
          </Box>
        </Card>
      </main>
    </div>
  )
}