import React from 'react';

// --- Native-Base ---
import { Input } from 'native-base';

// --- Components ---
import IconComponent from '@components/Icon';

export default function SearchInput() {
	return (
		<Input
			bgColor="white"
			borderRadius="2xl"
			shadow="1"
			InputLeftElement={<IconComponent name="search-outline" size="sm" m="2" />}
		/>
	);
}
