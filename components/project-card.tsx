import { Anchor, Card, Heading, Paragraph } from "@dracula/dracula-ui";
import Link from "next/link";

export default function ProjectCard({ title, description, link, linkText, source }: { title: string; description: string; link: string; linkText?: string; source: string }) {
    return (
        <Card variant="subtle" color="pink" m="sm" >
            <Heading size="lg" className="card-title" p="sm" >{title}</Heading>
            <Paragraph  px="md" >
                {description}
            </Paragraph>
            <Link href={source} passHref><Anchor
                isExternal={true}
                p="sm"
                color="pink"
                hoverColor="purple" >
                    Source
            </Anchor></Link>
            <Link href='https://modrinth.com/mod/kontrolo' passHref><Anchor
                isExternal={true}
                p="sm"
                color="pink"
                hoverColor="purple" >
                    {linkText ?? "Download"}
            </Anchor></Link>
        </Card>
    );
}