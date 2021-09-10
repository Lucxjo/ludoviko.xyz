import Link from "next/link";
import { Anchor } from "@dracula/dracula-ui";
import { DracColour } from '../lib/dracula-colors';

export default function LinkedListItem({
	children,
	href,
	colour,
	hoverColour,
	isExternal,
	rel,
}: {
	children: React.ReactNode;
	href: string;
	colour?: DracColour;
	hoverColour?: DracColour;
	isExternal?: boolean;
	rel?: string;
}) {
	return (
		<>
			{!rel && (
				<li>
					<Link href={href} passHref>
						<Anchor
							color={colour ?? 'pink'}
							hoverColor={hoverColour ?? 'purple'}
							isExternal={isExternal}
						>
							{children}
						</Anchor>
					</Link>
				</li>
			)}
			{rel && (
				<li>
					<Link href={href} passHref>
						<Anchor
							color={colour ?? 'pink'}
							hoverColor={hoverColour ?? 'purple'}
							isExternal={isExternal}
							rel={rel}
						>
							{children}
						</Anchor>
					</Link>
				</li>
			)}
		</>
	);
}
