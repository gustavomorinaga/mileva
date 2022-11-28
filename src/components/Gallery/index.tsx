import React, { useCallback, useEffect, useState } from 'react';
import ImageView from 'react-native-image-viewing';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	Center,
	FlatList,
	Image,
	Pressable,
	Stack,
	Text,
} from 'native-base';

// --- Interfaces ---
import { IImage } from '@interfaces/IImage';

interface IGalleryProps {
	data: IImage[];
	limit?: number;
	disableViewer?: boolean;
	onViewerChange?: ({ isOpen }: { isOpen?: boolean }) => void;
}

export default function Gallery({
	data = [],
	limit = 0,
	disableViewer = false,
	onViewerChange = () => {},
}: IGalleryProps) {
	const [images, setImages] = useState<IGalleryProps['data']>([]);
	const [moreImages, setMoreImages] = useState<IGalleryProps['data']>([]);

	const [visible, setVisible] = useState(false);
	const [imageIndex, setImageIndex] = useState(0);

	useEffect(() => {
		const isOutRange = data.length > limit + 1;

		setImages(isOutRange ? data.slice(0, limit) : data);
		setMoreImages(isOutRange ? data.slice(limit) : []);
	}, [data, limit]);

	const handleImageViewer = useCallback(
		(show = false, index = 0) => {
			if (disableViewer) return;

			setImageIndex(index);
			setVisible(show);
			onViewerChange({ isOpen: show });
		},
		[disableViewer, onViewerChange]
	);

	if (!images.length) return null;

	return (
		<>
			<Stack direction="row" space="2">
				<FlatList
					flexGrow={0}
					data={images}
					keyExtractor={item => item._id}
					renderItem={({ item, index }) => (
						<Pressable onPress={() => handleImageViewer(true, index)}>
							<AspectRatio
								ratio={{ base: 1 }}
								w="20"
								h="20"
								rounded="xl"
								overflow="hidden"
								shadow="2"
							>
								<Image source={{ uri: item.uri }} alt={item.alt} resizeMode="cover" />
							</AspectRatio>
						</Pressable>
					)}
					ItemSeparatorComponent={() => <Box w="2" />}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{
						marginBottom: -5,
						paddingBottom: 10,
					}}
				/>

				{limit && Boolean(moreImages.length) && (
					<Pressable onPress={() => handleImageViewer(true, limit)}>
						<Box
							position="relative"
							overflow="hidden"
							w="20"
							h="20"
							rounded="xl"
							shadow="2"
						>
							<AspectRatio ratio={{ base: 1 }}>
								<Image
									source={{ uri: moreImages[0].uri }}
									alt={moreImages[0].alt}
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
								<Center flex={1}>
									<Text fontSize="lg" color="lightText" shadow="2">
										{moreImages.length}+
									</Text>
								</Center>
							</Box>
						</Box>
					</Pressable>
				)}
			</Stack>

			{!disableViewer && (
				<ImageView
					images={data}
					imageIndex={imageIndex}
					visible={visible}
					animationType="fade"
					presentationStyle="overFullScreen"
					onRequestClose={() => handleImageViewer(false)}
					FooterComponent={({ imageIndex }) => (
						<Box flex={1} py="4">
							<Text color="lightText" textAlign="center" fontSize="lg">
								{imageIndex + 1} / {data.length}
							</Text>
						</Box>
					)}
				/>
			)}
		</>
	);
}
