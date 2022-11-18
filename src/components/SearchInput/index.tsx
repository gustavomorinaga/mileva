import React from 'react';

// --- Native-Base ---
import { Box, IBoxProps, IInputProps, Input } from 'native-base';

// --- Components ---
import Icon from '@components/Icon';

interface ISearchInputProps extends IInputProps {
	children?: React.ReactElement;
}

function SearchInput({ children, ...props }: ISearchInputProps) {
	return (
		<>
			<Input
				variant="unstyled"
				color="darkText"
				bgColor="warmGray.100"
				borderRadius="2xl"
				shadow="3"
				InputLeftElement={<Icon name="search-outline" size="sm" ml="4" />}
				{...props}
			/>

			{children}
		</>
	);
}

SearchInput.Autocomplete = function SearchInputAutocomplete({
	children,
	...props
}: IBoxProps) {
	return (
		<Box position="absolute" bgColor="white" shadow="1" {...props}>
			{children}
		</Box>
	);
};

export default SearchInput;
