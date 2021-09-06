import Link from "next/link";
import { Anchor } from "@dracula/dracula-ui";

export default function LinkedListItem({ children, href, colour }: { children: React.ReactNode; href: string; colour?: string }) {
    return (
        <li className={`drac-text drac-text-${colour ?? "white"}`}>
            <Link href={href} passHref>
                <Anchor>{children}</Anchor>
            </Link>
        </li>
    );
}