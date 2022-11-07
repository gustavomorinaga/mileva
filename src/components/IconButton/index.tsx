import React from 'react';

// --- Native-Base ---
import { IconButton, IIconButtonProps } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import { ISizes } from 'native-base/lib/typescript/theme/base/sizes';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

interface CustomIconButtonProps extends IIconButtonProps {
	name: keyof typeof Ionicons.glyphMap;
	color?: ColorType;
	iconSize?: ISizes;
}

export default function IconButtonComponent(props: CustomIconButtonProps) {
	return (
		<IconButton
			rounded="xl"
			_icon={{
				as: Ionicons,
				name: props.name,
				color: props.color ?? 'black',
				size: props.iconSize ?? 'md',
			}}
			{...props}
		/>
	);
}
