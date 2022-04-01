import React from 'react';

// --- Native-Base ---
import { IInputProps, Input } from 'native-base';

// --- Components ---
import IconComponent from '@components/Icon';

export default function SearchInput(props: IInputProps) {
	return (
		<Input
			variant="unstyled"
			color="darkText"
			bgColor="muted.100"
			borderRadius="2xl"
			shadow="3"
			InputLeftElement={<IconComponent name="search-outline" size="sm" ml="2" />}
			{...props}
		/>
	);
}
