import React from 'react';

import { Icon, IIconProps } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

export default function IconComponent(props: IIconProps) {
	return <Icon as={Ionicons} {...props} />;
}
