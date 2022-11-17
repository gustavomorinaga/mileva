import React from 'react';

// --- Native-Base ---
import { IInputProps, Input } from 'native-base';

// --- Components ---
import Icon from '@components/Icon';

export default function SearchInput(props: IInputProps) {
	return (
		<Input
			variant="unstyled"
			color="darkText"
			bgColor="warmGray.100"
			borderRadius="2xl"
			shadow="3"
			InputLeftElement={<Icon name="search-outline" size="sm" ml="4" />}
			{...props}
		/>
	);
}
