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
import IconComponent from '@components/Icon';

interface ICategoryButton {
	iconProps: {
		name: string;
		styles?: IIconProps;
	};
	pressableProps?: IPressableProps;
	boxProps?: IBoxProps;
	labelProps: {
		label: string;
		styles?: ITextProps;
	};
	handleOnPress?: () => void;
}

export default function CategoryButton({
	iconProps,
	pressableProps,
	boxProps,
	labelProps,
	handleOnPress,
}: ICategoryButton) {
	return (
		<Pressable {...pressableProps} onPress={handleOnPress}>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				borderRadius="2xl"
				p="10"
				bgColor="gray.300"
				{...boxProps}
			>
				<IconComponent
					name={iconProps.name}
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
