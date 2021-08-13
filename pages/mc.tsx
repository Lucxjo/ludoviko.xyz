import { Box, Heading, Anchor, Paragraph, Card, Button } from '@dracula/dracula-ui'
import Head from 'next/head'
import Link from 'next/link'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function mc() {
    const [copiedVan, setCopiedVan] = useState(false);
    const copyVan = () => setCopiedVan(() => true)
    return (
        <>
            <Card p="md" m="md" color="blackSecondary">
                <Head>
                    <title>Ludoviko.xyz | Minecraft</title>
                </Head>
                <Heading as="h1" size="2xl" id="mods">Minecraft Mods</Heading>
                <Paragraph>I am currently only working on two Minecraft projects that have been released.
                    However, I will be making more in the future that will primarily target the Fabric mod loader</Paragraph>

                <Heading size="xl" id="fabric">Fabric</Heading>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >Kontrolo</Heading>
                    <Paragraph  px="md" >
                        A Minecraft mod for the Fabric mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                        The mod also adds a GUI for you to add your own commands through a config file.
                    </Paragraph>
                    <Link href='https://github.com/Lucxjo/Kontrolo-Fabric' passHref><Anchor
                        isExternal={true}
                        p="sm"
                        color="purple"
                        hoverColor="pink" >
                            Source
                    </Anchor></Link>
                    <Link href='https://modrinth.com/mod/kontrolo' passHref><Anchor
                        isExternal={true}
                        p="sm"
                        color="purple"
                        hoverColor="pink" >
                            Download
                    </Anchor></Link>
                </Card>
                <Heading size="xl" id="forge">Forge</Heading>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >Kontrolo</Heading>
                    <Paragraph  px="md" >
                        A Minecraft mod for the Forge mod loader. This mod adds a GUI for common commands that can be clicked to be excecuted.
                        The mod also adds a GUI for you to add your own commands through a config file.
                    </Paragraph>
                    <Link href='https://github.com/Lucxjo/Kontrolo-Forge' passHref><Anchor
                        isExternal={true}
                        p="sm"
                        color="purple"
                        hoverColor="pink" >
                            Source
                    </Anchor></Link>
                    <Link href='https://modrinth.com/mod/kontrolo-forge' passHref><Anchor
                        isExternal={true}
                        p="sm"
                        color="purple"
                        hoverColor="pink" >
                        Download
                    </Anchor></Link>
                </Card>
            </Card>

            <Card p="md" m="md" id="server" color="blackSecondary">
                <Heading as="h1" size="2xl">Server</Heading>
                <Heading size="xl">Vanilla</Heading>
                <Paragraph>I run a vanilla server with a couple of utility plugins. You can join by entering mc.ludoviko.xyz as the server IP.
                <CopyToClipboard text='mc.ludoviko.ch' onCopy={copyVan}><Button color="purple" ml="xs">{ copiedVan ? 'Copied' : 'Copy server IP' }</Button></CopyToClipboard></Paragraph>
                <Link href='https://mc.ludoviko.ch' passHref><Anchor
                        isExternal={true}
                        p="sm"
                        color="purple"
                        hoverColor="pink" >
                        View map
                    </Anchor></Link>
            </Card>
        </>
    )
}