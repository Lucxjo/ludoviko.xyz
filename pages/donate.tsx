import { Anchor, Card, Heading, List, Paragraph } from "@dracula/dracula-ui";
import Link from "next/link";
import LinkedListItem from "../components/linked-list-item";

export default function Donate() {
    return (
        <Card p="md" m="md" color="blackSecondary">
            <Heading as="h1" size="2xl">Donate</Heading>
            <Paragraph>Please don't feel like you need to donate but donations are greatly appreciated. Here are all the links where you can send general donations to me:</Paragraph>
            <List variant="unordered">
                <LinkedListItem href="https://commerce.coinbase.com/checkout/07fdc998-916a-438f-9fc1-f66e4e8df416">Crypto</LinkedListItem>
                <LinkedListItem href="https://commerce.coinbase.com/checkout/447b8221-52c5-4759-a47e-444ce341f296">Crypto for Minecraft server</LinkedListItem>
                <LinkedListItem href="https://liberapay.com/Ludoviko/donate">Liberapay</LinkedListItem>
                <LinkedListItem href="https://ko-fi.com/ludoviko">Ko-fi</LinkedListItem>
            </List>
            <Paragraph>Did you know that you can also donate to me through a tip bot on my Discord server?</Paragraph>
        </Card>
    );
}
