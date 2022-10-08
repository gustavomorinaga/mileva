import React from 'react';

// --- Native-Base ---
import { Avatar, Flex, Heading, Stack, Text } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import SearchInput from '@components/SearchInput';
import CategoryButton from '@components/CategoryButton';

// { route: { params } }
export default function HomeScreen() {
	return (
		<BaseScreen mt={-32}>
			<Flex direction="row" justify="space-between" mb="7">
				<Stack>
					<Heading color="white">Olá, Gustavo</Heading>
					<Text color="white">Qual a próxima parada?</Text>
				</Stack>

				<Avatar source={{ uri: 'https://github.com/gmatthewsfeuer.png' }} />
			</Flex>

			<SearchInput placeholder="Pesquisar um destino..." />

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
