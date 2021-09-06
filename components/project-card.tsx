import { Anchor, Card, Heading, Paragraph } from "@dracula/dracula-ui";
import Link from "next/link";

/**
 * Card component for projects
 * @param title Title of the project
 * @param description Description of the project
 * @param link1 Link to the project (second link)
 * @param link1Text Text of the second link
 * @param link0 Link to the project (first link)
 * @param link0Text Text of the first link
 */
export default function ProjectCard({ title, description, link0, link0Text, link1, link1Text }: { title: string; description: string; link0: string; link0Text?: string; link1: string; link1Text?: string }) {
    return (
        <Card variant="subtle" color="pink" m="sm" >
            <Heading size="lg" className="card-title" p="sm" >{title}</Heading>
            <Paragraph  px="md" >
                {description}
            </Paragraph>
            <Link href={link0} passHref><Anchor
                isExternal={true}
                p="sm"
                color="pink"
                hoverColor="purple" >
                    {link0Text ?? "Source"}
            </Anchor></Link>
            <Link href={link1} passHref><Anchor
                isExternal={true}
                p="sm"
                color="pink"
                hoverColor="purple" >
                    {link1Text ?? "Download"}
            </Anchor></Link>
        </Card>
    );
}