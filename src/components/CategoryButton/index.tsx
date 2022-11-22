import React from 'react';
import { ImageSourcePropType } from 'react-native';

// --- Native Base ---
import {
	Box,
	Center,
	IBoxProps,
	IIconProps,
	Image,
	IPressableProps,
	ITextProps,
	Pressable,
	Text,
	View,
} from 'native-base';

// --- Components ---
import Icon from '@components/Icon';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

interface ICategoryButton {
	pressableProps?: IPressableProps;
	boxProps?: IBoxProps;
	image?: {
		uri: ImageSourcePropType;
		alt: string;
	};
	iconProps?: {
		name: keyof typeof Ionicons.glyphMap;
		styles?: IIconProps;
	};
	labelProps: {
		label: string;
		styles?: ITextProps;
	};
	onPress?: () => void;
}

export default function CategoryButton({
	pressableProps,
	boxProps,
	image,
	iconProps,
	labelProps,
	onPress,
}: ICategoryButton) {
	return (
		<Pressable flex={1} onPress={onPress} {...pressableProps}>
			<Box
				position="relative"
				overflow="hidden"
				height={100}
				rounded="2xl"
				bgColor="black"
				{...boxProps}
			>
				{image && (
					<>
						<View position="absolute" flex={1} h="full">
							<Image
								source={image.uri}
								alt={image.alt}
								h="full"
								opacity={iconProps?.name ? '10' : '100'}
								resizeMode="cover"
							/>
						</View>
					</>
				)}

				{iconProps?.name && (
					<Center position="absolute" flex={1} w="full" h="full">
						<Box
							p="2"
							rounded="xl"
							bgColor={iconProps.styles.color + ':alpha.10'}
							borderWidth="2"
							borderColor={iconProps.styles.color + ':alpha.20'}
						>
							<Icon
								name={iconProps.name as any}
								size="3xl"
								color="muted.500"
								shadow="5"
								{...iconProps.styles}
							/>
						</Box>
					</Center>
				)}
			</Box>

			<Text textAlign="center" mt="2" {...labelProps.styles}>
				{labelProps.label}
			</Text>
		</Pressable>
	);
}
