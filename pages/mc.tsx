import { Box, Heading, Anchor, Paragraph, Card, Button } from '@dracula/dracula-ui'
import Head from 'next/head'
import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import ProjectCard from '../components/project-card';
import PageLoader from 'next/dist/client/page-loader';

export default function mc() {
    const [copiedVan, setCopiedVan] = useState(false);
    const copyVan = () => setCopiedVan(() => true)
    return (
        <>
            <Card p="md" m="md" color="blackSecondary">
                <Head>
                    <title>Ludoviko | Minecraft</title>
                </Head>
                <Heading as="h1" size="2xl" id="mods">Minecraft Mods</Heading>
                <Paragraph>I am currently only working on two Minecraft projects that have been released.
                    However, I will be making more in the future that will primarily target the Fabric mod loader</Paragraph>

                <Heading size="xl" id="fabric">Fabric</Heading>
                <ProjectCard
                    title="Kontrolo"
                    description="A Minecraft mod for the Fabric mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                        The mod also adds a GUI for you to add your own commands through a config file."
                    link1="https://modrinth.com/mod/kontrolo"
                    link0="https://github.com/Lucxjo/Kontrolo-Fabric"
                    link1Text="Download" />
                <Heading size="xl" id="forge">Forge</Heading>
                <ProjectCard
                    title="Kontrolo"
                    description="A Minecraft mod for the Fabric mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted. The mod also adds a GUI for you to add your own commands through a config file."
                    link1="https://modrinth.com/mod/kontrolo-forge"
                    link0="https://github.com/Lucxjo/Kontrolo-Forge"
                    link1Text="Download" />
            </Card>

            <Card p="md" m="md" id="server" color="blackSecondary">
                <Heading as="h1" size="2xl">Server</Heading>
                <Paragraph>You can contribute to the running of these servers directly by donating with Crypto! If you don't use crypto, feel free to head to<Link href="/donate" passHref><Anchor m="sm" color="pink">the donations page</Anchor></Link>for more options</Paragraph>
                <Link href="https://commerce.coinbase.com/checkout/447b8221-52c5-4759-a47e-444ce341f296" passHref ><Button color="pink" mb="sm">Donate with Crypto</Button></Link>
                <br />
                <Heading size="xl">Vanilla</Heading>
                <Paragraph>I run a vanilla server with a couple of utility plugins. You can join by entering mc.ludoviko.ch as the server IP. You also need to join my discord server.
                <CopyToClipboard text='mc.ludoviko.ch' onCopy={copyVan}><Button color="pink" ml="xs">{ copiedVan ? 'Copied' : 'Copy server IP' }</Button></CopyToClipboard></Paragraph>
                <Paragraph>IMPORTANT: This server will be reset a couple of weeks after the release of Minecraft 1.18 when there is a Papermc build available. A torrent file for the world before the nukes hit will be generated for others to download.</Paragraph>
                <Link href='https://mc.ludoviko.ch' passHref><Anchor
                        isExternal={true}
                        p="sm"
                        color="pink"
                        hoverColor="purple" >
                        View map
                    </Anchor></Link>

                <Paragraph>The world files for the 1.17 server can now be downloaded from <Link href="https://web.tresorit.com/l/wERrS#HkSEVBAUMY97pEpG8NxswA" passHref><Anchor color="pink">here</Anchor></Link> or via <Link href="/mc-serv--1-17.tar.torrent" passHref><Anchor color="pink">Torrent (.tar.bz)</Anchor></Link></Paragraph>
            </Card>
        </>
    )
}