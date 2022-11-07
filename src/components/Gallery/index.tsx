import React from 'react';

// --- Native-Base ---
import { AspectRatio, Image, Stack } from 'native-base';

// --- Interfaces ---
import { IImage } from '@interfaces/IImage';

interface IGalleryProps {
	data: IImage[];
}

export default function Gallery({ data }: IGalleryProps) {
	return (
		<Stack direction="row" space="2" mb="4">
			{data.map(item => (
				<AspectRatio
					key={item._id}
					ratio={{ base: 1 / 1 }}
					w="16"
					h="16"
					rounded="xl"
					overflow="hidden"
				>
					<Image source={{ uri: item.uri }} alt={item.alt} resizeMode="cover" />
				</AspectRatio>
			))}
		</Stack>
	);
}
