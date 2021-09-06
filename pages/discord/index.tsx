import Head from 'next/head'
import { Card, Heading, Paragraph, Anchor } from '@dracula/dracula-ui'
import Link from 'next/link'

export default function Discord() {
    return (
        <>
            <Head>
                <title>Ludoviko.xyz | Discord</title>
            </Head>
            <Card p="md" m="md" color="blackSecondary">
                <Heading as="h1" size="2xl">Discord</Heading>
                <Paragraph>
                    I help to ensure the correct running of multiple Discord servers as an Admin or Moderator. I am currently working on a form system to help with appeals of these servers. The servers that I help to run will be listed here with a link to join and an appeals link if there is one.
                </Paragraph>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >Chloee9824's Twitch</Heading>
                    <Paragraph m="sm" className="card-text">
                        Chloee is a good friend of mine who streams on Twitch. She set up her server in 2019 and I've been helping her to run it for a while now. Within the server we have managed to build a somewhat diverse member base that also allows other streamers to build their following.
                    </Paragraph>
                    <Link href="https://discord.gg/RJuFxzkwbh" passHref><Anchor m="sm" color="pink">Join!</Anchor></Link>
                </Card>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >Ludo's Server</Heading>
                    <Paragraph m="sm" className="card-text">
                        This one is my server, I'm trying to build an inclusive community that is open to everyone. I'm hoping to do something a little different with this server, and I'm wanting to allow the community to have a very large say in how the server is run. I need more members though before I can implement this.
                    </Paragraph>
                    <Link href="https://discord.gg/UZRyJrEPTU" passHref><Anchor m="sm" color="pink">Join!</Anchor></Link>
                </Card>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >The Gay Lounge</Heading>
                    <Paragraph m="sm" className="card-text">
                        The Gay Lounge is another Discord server that I help run for a friend who is a streamer. The Gay Lounge is run by Tommy, who has built an inclusive community. Don't let the name fool you, not everyone in the server is LGBT+ and it isn't a requirement.
                    </Paragraph>
                    <Link href="https://discord.gg/vMcturZ" passHref><Anchor m="sm" color="pink">Join!</Anchor></Link>
                </Card>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >Tesslin</Heading>
                    <Paragraph m="sm" className="card-text">
                        This one is my server, I'm trying to build an inclusive community that is open to everyone. I'm hoping to do something a little different with this server, and I'm wanting to allow the community to have a very large say in how the server is run. I need more members though before I can implement this.
                    </Paragraph>
                    <Link href="https://discord.gg/F9tEbamU8A" passHref><Anchor m="sm" color="pink">Join!</Anchor></Link>
                </Card>
                <Card variant="subtle" color="pink" m="sm" >
                    <Heading size="lg" className="card-title" p="sm" >Young Royals</Heading>
                    <Paragraph m="sm" className="card-text">
                        The Young Royals Discord was made for people who love the Young Royals TV programme on Netflix.
                    </Paragraph>
                    <Link href="https://vannerba.st/discord" passHref><Anchor m="sm" color="pink">Join!</Anchor></Link>
                </Card>
            </Card>
        </>
    )
}