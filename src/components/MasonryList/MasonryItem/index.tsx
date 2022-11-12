import React, { useMemo } from 'react';

// --- Native-Base ---
import { Box, IBoxProps, IImageProps, Image } from 'native-base';

interface IMasonryItem {
	image: {
		uri: string;
		alt: string;
	};
	children?: React.ReactElement;
	containerProps?: IBoxProps;
	imageProps?: IImageProps;
}

export default function MasonryItem({
	image,
	children,
	containerProps,
	imageProps,
}: IMasonryItem) {
	const randomBool = useMemo(() => Math.random() < 0.5, []);

	return (
		<Box
			position="relative"
			flex={1}
			overflow="hidden"
			mt="4"
			ml="4"
			borderRadius="2xl"
			{...containerProps}
		>
			<Image
				source={{ uri: image.uri }}
				alt={image.alt}
				height={randomBool ? 150 : 280}
				alignSelf="stretch"
				resizeMode="cover"
				{...imageProps}
			/>

			{children}
		</Box>
	);
}
