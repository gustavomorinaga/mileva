import React from 'react';

// --- Native-Base ---
import { Icon, IIconProps } from 'native-base';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

interface IIconComponentsProps extends Omit<IIconProps, 'name'> {
	name: keyof typeof Ionicons.glyphMap;
}

export default function IconComponent({ name, ...props }: IIconComponentsProps) {
	return <Icon as={Ionicons} name={name} {...props} />;
}
