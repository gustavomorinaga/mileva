import React, { useState } from 'react';

// --- Native-Base ---
import { AspectRatio, Box, Center, Image, Stack, Text } from 'native-base';

// --- Interfaces ---
import { IImage } from '@interfaces/IImage';

interface IGalleryProps {
	data: IImage[];
}

export default function Gallery({ data }: IGalleryProps) {
	const [images] = useState<IGalleryProps['data']>(data.slice(0, 3));
	const [moreImages] = useState<IGalleryProps['data']>(data.slice(3));

	if (!images.length) return null;

	return (
		<Stack direction="row" space="2" mb="4">
			{images.map(item => (
				<AspectRatio
					key={item._id}
					ratio={{ base: 1 / 1 }}
					w="20"
					h="20"
					rounded="xl"
					overflow="hidden"
				>
					<Image source={{ uri: item.uri }} alt={item.alt} resizeMode="cover" />
				</AspectRatio>
			))}

			{Boolean(moreImages.length) && (
				<Box position="relative" overflow="hidden" w="20" h="20" rounded="xl">
					<AspectRatio ratio={{ base: 1 / 1 }}>
						<Image
							source={{ uri: moreImages.at(0).uri }}
							alt={moreImages.at(0).alt}
							resizeMode="cover"
						/>
					</AspectRatio>

					<Box
						position="absolute"
						w="full"
						h="full"
						borderRadius="lg"
						bgColor="black:alpha.60"
					>
						<Center w="full" h="full">
							<Text fontSize="16" color="lightText">
								{moreImages.length}+
							</Text>
						</Center>
					</Box>
				</Box>
			)}
		</Stack>
	);
}
