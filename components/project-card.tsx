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
export default function ProjectCard({ title, description, link0, link0Text, link0Ext, link1, link1Text, link1Ext }: { title: string; description: string; link0: string; link0Text?: string; link0Ext?: boolean; link1?: string; link1Text?: string; link1Ext?: boolean }) {
    return (
        <Card variant="subtle" color="pink" m="sm" >
            <Heading size="lg" className="card-title" p="sm" >{title}</Heading>
            <Paragraph  px="md" >
                {description}
            </Paragraph>
            <Link href={link0} passHref><Anchor
                isExternal={link0Ext ?? true}
                p="sm"
                color="pink"
                hoverColor="purple" >
                    {link0Text ?? "Source"}
            </Anchor></Link>
            { link1 &&
                <Link href={link1} passHref><Anchor
                    isExternal={link1Ext ?? true}
                    p="sm"
                    color="pink"
                    hoverColor="purple" >
                    {link1Text ?? "View"}
                </Anchor></Link>
            }
        </Card>
    );
}