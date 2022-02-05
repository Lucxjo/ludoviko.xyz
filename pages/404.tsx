/** @format */

import { Box, Heading, Anchor, Paragraph } from '@dracula/dracula-ui';
import Head from 'next/head';

export default function Custom404() {
	return (
		<Box rounded="lg" p="md" m="md" color="blackSecondary">
			<Head>
				<title>Ludoviko | 404</title>
			</Head>
			<Heading size="2xl">We have a 404!</Heading>
			<Heading size="lg">
				Sorry, it looks like the page that you are looking for cannot be
				found.
			</Heading>
			<Paragraph>
				If you think that something should be here, please let me know
				at{' '}
				<Anchor href="mailto:me@ludoviko.xyz">me@ludoviko.xyz</Anchor>
			</Paragraph>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            plausible("404",{ props: { path: document.location.pathname } });
        `,
				}}></script>
		</Box>
	);
}
