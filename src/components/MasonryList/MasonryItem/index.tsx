import React, { useMemo } from 'react';

// --- Native-Base ---
import { Box, Image } from 'native-base';

interface MasonryItemProps {
	item: any;
}

export default function MasonryItem({ item }: MasonryItemProps) {
	const randomBool = useMemo(() => Math.random() < 0.5, []);

	return (
		<Box flex={1} overflow="hidden" mt="4" ml="4" borderRadius="2xl">
			<Image
				source={{ uri: item.uri }}
				alt={item.alt}
				height={randomBool ? 150 : 280}
				alignSelf="stretch"
				resizeMode="cover"
			/>
		</Box>
	);
}
