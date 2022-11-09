import React from 'react';

import { Icon, IIconProps } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

export default function IconComponent({
	name,
	...props
}: IIconProps & { name: keyof typeof Ionicons.glyphMap }) {
	return <Icon as={Ionicons} name={name} {...props} />;
}
