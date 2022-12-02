import React, { useCallback, useEffect, useState } from 'react';
import { useDebounce } from 'react-use';

// --- Native-Base ---
import { Box, FlatList, IBoxProps, IInputProps, Input, Text, View } from 'native-base';

// --- Components ---
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';

interface ISearchInputProps extends IInputProps {
	children?: React.ReactElement;
	clearButton?: boolean;
}

function SearchInput({ children, clearButton = false, ...props }: ISearchInputProps) {
	const [showAutocomplete, setShowAutocomplete] = useState(Boolean(props.value) || false);

	const handleClearInput = () => props.onChangeText('');

	return (
		<View position="relative" flex={1} marginBottom={-330} pb="2">
			<Input
				variant="unstyled"
				color="darkText"
				bgColor="warmGray.100"
				rounded="2xl"
				shadow="4"
				zIndex={9999}
				InputLeftElement={<Icon name="search-outline" size="sm" ml="4" />}
				returnKeyType="search"
				onFocus={() => setShowAutocomplete(true)}
				{...(clearButton && {
					InputRightElement: (
						<IconButton
							name="close"
							variant="unstyled"
							iconSize="sm"
							rounded="none"
							opacity={Number(Boolean(props.value))}
							onPress={handleClearInput}
						/>
					),
				})}
				{...props}
			/>

			{showAutocomplete && (
				<View flex={1} position="absolute" top="0" left="0" right="0" zIndex={999}>
					{children}
				</View>
			)}
		</View>
	);
}

interface IAutocompleteProps {
	searchTerm: string;
	searchBy: string;
	data: any[];
	keyExtractor: (item: any, index: number) => string;
	renderItem: ({ item, index }) => React.ReactElement;
	fallback?: React.ReactElement;
	containerProps?: IBoxProps;
}

SearchInput.Autocomplete = function SearchInputAutocomplete({
	searchTerm,
	searchBy,
	data,
	keyExtractor,
	renderItem,
	fallback,
	containerProps,
}: IAutocompleteProps) {
	const [filteredData, setFilteredData] = useState(data);
	const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

	const [isReady] = useDebounce(() => setDebouncedSearchTerm(searchTerm), 300, [
		searchTerm,
	]);

	const showAutocomplete = isReady && Boolean(debouncedSearchTerm);

	const handleFilterData = useCallback(() => {
		setFilteredData(
			data.filter(item =>
				item[searchBy].toLowerCase().includes(debouncedSearchTerm.trim().toLowerCase())
			)
		);
	}, [data, debouncedSearchTerm, searchBy]);

	useEffect(() => {
		handleFilterData();
	}, [handleFilterData]);

	if (!showAutocomplete) return null;

	return (
		<Box
			flex={1}
			overflow="hidden"
			pt="10"
			bgColor="white"
			rounded="2xl"
			shadow="2"
			{...containerProps}
		>
			{filteredData.length ? (
				<FlatList
					data={filteredData}
					keyExtractor={keyExtractor}
					renderItem={renderItem}
					showsVerticalScrollIndicator={false}
					contentContainerStyle={{
						paddingTop: 15,
						paddingHorizontal: 10,
					}}
					maxH="56"
				/>
			) : (
				<Box flex={1} py="3" px="5">
					{fallback || (
						<Text color="gray.400" fontSize="xs">
							Não há resultados com esse termo
						</Text>
					)}
				</Box>
			)}
		</Box>
	);
};

export default SearchInput;
