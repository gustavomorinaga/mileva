import React from 'react';

// --- Native-Base ---
import { Flex } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import SearchInput from '@components/SearchInput';
import CategoryButton from '@components/CategoryButton';

// { route: { params } }
export default function HomeScreen() {
	return (
		<BaseScreen isOnAppContent={true}>
			<SearchInput />

			<Flex direction="row" justify="space-between" mt="4">
				<CategoryButton
					boxProps={{ bgColor: 'red.200' }}
					iconProps={{ name: 'business', styles: { color: 'red.500' } }}
					labelProps={{ label: 'Hotéis' }}
				/>
				<CategoryButton
					boxProps={{ bgColor: 'darkBlue.200' }}
					iconProps={{ name: 'airplane', styles: { color: 'darkBlue.500' } }}
					labelProps={{ label: 'Passagens' }}
				/>
				<CategoryButton
					boxProps={{ bgColor: 'amber.200' }}
					iconProps={{ name: 'cube', styles: { color: 'amber.500' } }}
					labelProps={{ label: 'Pacotes' }}
				/>
			</Flex>
		</BaseScreen>
	);
}
