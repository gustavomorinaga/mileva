import React from 'react';

// --- Native Base ---
import {
	Box,
	IBoxProps,
	IIconProps,
	IPressableProps,
	ITextProps,
	Pressable,
	Text,
} from 'native-base';

// --- Components ---
import Icon from '@components/Icon';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

interface ICategoryButton {
	iconProps: {
		name: keyof typeof Ionicons.glyphMap;
		styles?: IIconProps;
	};
	pressableProps?: IPressableProps;
	boxProps?: IBoxProps;
	labelProps: {
		label: string;
		styles?: ITextProps;
	};
	onPress?: () => void;
}

export default function CategoryButton({
	iconProps,
	pressableProps,
	boxProps,
	labelProps,
	onPress,
}: ICategoryButton) {
	return (
		<Pressable {...pressableProps} onPress={onPress}>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				borderRadius="2xl"
				p="8"
				bgColor="gray.300"
				{...boxProps}
			>
				<Icon
					name={iconProps.name as any}
					size="3xl"
					color="muted.500"
					{...iconProps.styles}
				/>
			</Box>
			<Text textAlign="center" mt="2" {...labelProps.styles}>
				{labelProps.label}
			</Text>
		</Pressable>
	);
}
