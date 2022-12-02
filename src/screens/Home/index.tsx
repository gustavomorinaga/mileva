import React, { useState } from 'react';

// --- Navigation ---
import { THomeParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import { AspectRatio, Box, Divider, Image, Pressable, Stack, Text } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import WelcomeHeader from '@components/WelcomeHeader';
import SearchInput from '@components/SearchInput';
import CategoryButton from '@components/CategoryButton';
import Masonry from '@components/MasonryList';
import Icon from '@components/Icon';

// --- Images ---
const hotelImage = require('@images/03_background.jpg');
const ticketImage = require('@images/04_background.jpg');
const vacationImage = require('@images/05_background.jpg');

// --- Stores ---
import useDestinationsStore from '@stores/destinations';

export default function HomeScreen({ navigation }: THomeParamProps) {
	const { destinations } = useDestinationsStore(state => state);

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchDestination = (value: string) => setSearchTerm(value);

	const locationItem = ({ item }) => {
		return (
			<Box
				position="absolute"
				left="0"
				bottom="0"
				m="2"
				p="2"
				borderRadius="lg"
				bgColor="black:alpha.80"
			>
				<Text color="lightText">{item.name}</Text>
				<Stack direction="row" space="1" alignItems="baseline">
					<Icon name="star" color="amber.400" />
					<Text color="lightText">{item.rate}</Text>
				</Stack>
			</Box>
		);
	};

	return (
		<>
			<Header>
				<WelcomeHeader />
			</Header>

			<BaseScreen mt={-12} scrollEnabled={false}>
				<Stack flex={1} space="4">
					<SearchInput
						placeholder="Pesquisar um destino..."
						value={searchTerm}
						onChangeText={handleSearchDestination}
						clearButton
					>
						<SearchInput.Autocomplete
							searchTerm={searchTerm}
							searchBy="name"
							data={destinations}
							keyExtractor={item => item._id}
							renderItem={({ item }) => (
								<Pressable
									flex={1}
									onPress={() =>
										navigation.navigate('Destination', { destination: item })
									}
								>
									<Box flex={1} mb="2">
										<Stack space="2">
											<Stack flex={1} direction="row" space="2" alignItems="center">
												<AspectRatio
													ratio={{ base: 1 }}
													overflow="hidden"
													rounded="xl"
													w="10"
													h="10"
												>
													<Image
														source={{ uri: item.image.uri }}
														alt={item.image.alt}
														resizeMode="cover"
													/>
												</AspectRatio>

												<Text>{item.name}</Text>
											</Stack>

											<Divider />
										</Stack>
									</Box>
								</Pressable>
							)}
						/>
					</SearchInput>

					<Stack direction="row" space="4" justifyContent="space-between">
						<CategoryButton
							image={{
								uri: hotelImage,
								alt: 'Photo by Vadim Babenko on Unsplash',
							}}
							iconProps={{ name: 'business', styles: { color: 'red.500' } }}
							labelProps={{ label: 'Hotéis' }}
							onPress={() => navigation.navigate('Hotels')}
						/>

						<CategoryButton
							image={{
								uri: ticketImage,
								alt: 'Photo by Christian Wiediger on Unsplash',
							}}
							iconProps={{ name: 'airplane', styles: { color: 'darkBlue.500' } }}
							labelProps={{ label: 'Passagens' }}
							onPress={() => navigation.navigate('Tickets')}
						/>

						<CategoryButton
							image={{
								uri: vacationImage,
								alt: 'Photo by Hannah Busing on Unsplash',
							}}
							iconProps={{ name: 'cube', styles: { color: 'amber.500' } }}
							labelProps={{ label: 'Pacotes' }}
							onPress={() => navigation.navigate('Packages')}
						/>
					</Stack>

					<Masonry
						numColumns={2}
						data={destinations}
						renderChild={locationItem}
						containerProps={{
							shadow: '2',
						}}
						onPress={({ item }) =>
							navigation.navigate('Destination', { destination: item })
						}
					/>
				</Stack>
			</BaseScreen>
		</>
	);
}
