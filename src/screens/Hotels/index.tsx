import React, { useState } from 'react';

// --- Navigation ---
import { THotelsParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	Divider,
	FlatList,
	Heading,
	Image,
	Pressable,
	Stack,
	Text,
	View,
	ZStack,
} from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import SearchInput from '@components/SearchInput';
import Card from '@components/Card';

// --- Stores ---
import useHotelsStore from '@stores/hotels';

export default function HotelsScreen({ navigation }: THotelsParamProps) {
	const { hotels } = useHotelsStore(state => state);

	const [searchTerm, setSearchTerm] = useState('');

	const handleSearchHotels = (value: string) => setSearchTerm(value);

	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						name="arrow-back"
						bgColor="white"
						onPress={() => navigation.goBack()}
					/>

					<Heading textAlign="center" color="white">
						Hotéis
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<Stack direction="row" space="2" mb="4">
					<SearchInput
						placeholder="Pesquisar um hotel..."
						value={searchTerm}
						onChangeText={handleSearchHotels}
					>
						<SearchInput.Autocomplete
							searchTerm={searchTerm}
							searchBy="title"
							data={hotels}
							keyExtractor={item => item._id}
							renderItem={({ item }) => (
								<Pressable
									flex={1}
									onPress={() => navigation.navigate('Hotel', { hotel: item })}
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

												<Text>{item.title}</Text>
											</Stack>

											<Divider />
										</Stack>
									</Box>
								</Pressable>
							)}
							fallback={
								<Text color="gray.400" fontSize="xs">
									Não há resultados com esse termo
								</Text>
							}
						/>
					</SearchInput>

					<IconButton
						name="options"
						bgColor="white"
						borderRadius="2xl"
						shadow="3"
						size="lg"
					/>
				</Stack>

				<Box flex={1} mx={-5}>
					<ZStack zIndex={99}>
						<Box
							bg={{
								linearGradient: {
									colors: ['transparent', 'warmGray.100'],
									start: [0, 0.75],
									end: [0, 0],
								},
							}}
							w="full"
							h="8"
						/>
					</ZStack>
					<FlatList
						data={hotels}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Card
								image={item.image}
								containerProps={{ mx: 5, mb: 5 }}
								onPress={() => navigation.navigate('Hotel', { hotel: item })}
							>
								<Card.Content>
									<Card.Header title={item.title} />
									<Card.Body>
										<Stack space="2">
											<Stack direction="row" space="2" alignItems="baseline">
												<Icon name="location" color="red.500" />

												<Stack direction="row" space="1">
													<Text>{item.location}</Text>
													{item.proximity && (
														<Text color="gray.400">({item.proximity}Km do destino)</Text>
													)}
												</Stack>
											</Stack>

											<Stack direction="row" space="2" alignItems="baseline">
												<Icon name="star" color="amber.400" />

												<Stack direction="row" space="1">
													<Text>{item.rate}</Text>
													<Text color="gray.400">({item.reviews} reviews)</Text>
												</Stack>
											</Stack>
										</Stack>
									</Card.Body>

									<Card.Footer>
										<Stack
											direction="row"
											space="1"
											alignSelf="flex-end"
											alignItems="baseline"
										>
											<Stack direction="row" space="1">
												<Text bold fontSize="2xl">
													R$ {item.price}
												</Text>
											</Stack>

											<Text>diária</Text>
										</Stack>
									</Card.Footer>
								</Card.Content>
							</Card>
						)}
						contentContainerStyle={{
							marginTop: -4,
							paddingTop: 4,
							paddingBottom: 10,
						}}
						pt="4"
					/>
				</Box>
			</BaseScreen>
		</>
	);
}
