import React from 'react';

// --- Native-Base ---
import { AspectRatio, Box, Heading, Image, Stack, Text } from 'native-base';

interface IImageProps {
	image: {
		uri: string;
		alt: string;
	};
	title?: string;
	subtitle?: string;
	content?: React.ReactElement;
	sideContent?: React.ReactElement;
}

export default function ImageCard({
	image,
	title,
	subtitle,
	content,
	sideContent,
}: IImageProps) {
	return (
		<Box position="relative" overflow="hidden" borderRadius="2xl" shadow="5">
			<AspectRatio ratio={{ base: 1 / 1 }}>
				<Image
					source={{ uri: image.uri }}
					alt={image.alt}
					height="full"
					alignSelf="stretch"
					resizeMode="cover"
				/>
			</AspectRatio>

			{title && (
				<Box
					position="absolute"
					w="full"
					h="full"
					bg={{
						linearGradient: {
							colors: ['transparent', 'black:alpha.70'],
							start: [0, 0.5],
							end: [0, 0],
						},
					}}
				/>
			)}

			<Stack position="absolute" top="0" left="0" right="0" bottom="0">
				<Stack flex={1} direction="row" space="2" justifyContent="space-between" m="4">
					<Stack>
						<Heading color="lightText" shadow="3">
							{title}
						</Heading>
						<Text color="lightText" shadow="3">
							{subtitle}
						</Text>
					</Stack>

					<Stack space="2">{sideContent}</Stack>
				</Stack>

				{content && (
					<Box
						m="4"
						p="2"
						alignSelf="flex-start"
						borderRadius="lg"
						bgColor="black:alpha.80"
					>
						{content}
					</Box>
				)}
			</Stack>
		</Box>
	);
}
