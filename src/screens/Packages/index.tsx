import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { TPackagesParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	Center,
	Divider,
	FlatList,
	Heading,
	Image,
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

// --- Date-FNS ---
import { format, formatDistance, formatISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const data = [
	{
		_id: '1',
		accommodation: {
			name: 'Belo Horizonte',
			state: 'Minas Gerais',
			days: 5,
		},
		startPath: {
			company: {
				_id: '1',
				name: 'Latam',
				logo: {
					uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_JJ.png?s=40x40',
					alt: 'Latam Logo',
				},
			},
			origin: {
				alias: 'GRU',
				state: 'São Paulo',
				date: formatISO(new Date('2022-05-23T18:10:00')),
			},
			destination: {
				alias: 'BHZ',
				state: 'Minas Gerais',
				date: formatISO(new Date('2022-05-23T19:20:00')),
			},
			price: 501,
		},
		endPath: {
			company: {
				_id: '2',
				name: 'Azul',
				logo: {
					uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_AD.png?s=40x40',
					alt: 'Azul Logo',
				},
			},
			origin: {
				alias: 'BHZ',
				state: 'Minas Gerais',
				date: formatISO(new Date('2022-05-23T18:10:00')),
			},
			destination: {
				alias: 'GRU',
				state: 'São Paulo',
				date: formatISO(new Date('2022-05-23T19:20:00')),
			},
			price: 476,
		},
		totalPrice: 977,
	},
	{
		_id: '2',
		accommodation: {
			name: 'Belo Horizonte',
			state: 'Minas Gerais',
			days: 5,
		},
		startPath: {
			company: {
				_id: '1',
				name: 'Latam',
				logo: {
					uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_JJ.png?s=40x40',
					alt: 'Latam Logo',
				},
			},
			origin: {
				alias: 'GRU',
				state: 'São Paulo',
				date: formatISO(new Date('2022-05-23T18:10:00')),
			},
			destination: {
				alias: 'BHZ',
				state: 'Minas Gerais',
				date: formatISO(new Date('2022-05-23T19:20:00')),
			},
			price: 501,
		},
		endPath: {
			company: {
				_id: '2',
				name: 'Azul',
				logo: {
					uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_AD.png?s=40x40',
					alt: 'Azul Logo',
				},
			},
			origin: {
				alias: 'BHZ',
				state: 'Minas Gerais',
				date: formatISO(new Date('2022-05-23T18:10:00')),
			},
			destination: {
				alias: 'GRU',
				state: 'São Paulo',
				date: formatISO(new Date('2022-05-23T19:20:00')),
			},
			price: 476,
		},
		totalPrice: 977,
	},
	{
		_id: '3',
		accommodation: {
			name: 'Belo Horizonte',
			state: 'Minas Gerais',
			days: 5,
		},
		startPath: {
			company: {
				_id: '1',
				name: 'Latam',
				logo: {
					uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_JJ.png?s=40x40',
					alt: 'Latam Logo',
				},
			},
			origin: {
				alias: 'GRU',
				state: 'São Paulo',
				date: formatISO(new Date('2022-05-23T18:10:00')),
			},
			destination: {
				alias: 'BHZ',
				state: 'Minas Gerais',
				date: formatISO(new Date('2022-05-23T19:20:00')),
			},
			price: 501,
		},
		endPath: {
			company: {
				_id: '2',
				name: 'Azul',
				logo: {
					uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_AD.png?s=40x40',
					alt: 'Azul Logo',
				},
			},
			origin: {
				alias: 'BHZ',
				state: 'Minas Gerais',
				date: formatISO(new Date('2022-05-23T18:10:00')),
			},
			destination: {
				alias: 'GRU',
				state: 'São Paulo',
				date: formatISO(new Date('2022-05-23T19:20:00')),
			},
			price: 476,
		},
		totalPrice: 977,
	},
];

export default function PackagesScreen({ navigation }: TPackagesParamProps) {
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
						Pacotes
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<Stack direction="row" space="2" mb="4">
					<SearchInput placeholder="Pesquisar um destino..." />

					<IconButton
						name="options"
						bgColor="white"
						borderRadius="2xl"
						shadow="3"
						size="lg"
					/>
				</Stack>

				<SafeAreaView style={{ flex: 1, marginTop: -8, marginHorizontal: -20 }}>
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
						pt="4"
						contentContainerStyle={{
							marginTop: -4,
							paddingTop: 4,
							paddingBottom: 10,
						}}
						data={data}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Card containerProps={{ mx: 5, mb: 5 }}>
								<Card.Content>
									<Card.Body>
										<Stack space="4">
											<Stack
												position="relative"
												direction="row"
												space="2"
												alignItems="center"
												justifyContent="space-between"
												mt={-2}
											>
												<Box zIndex={9} bgColor="white">
													<Text color="amber.600" bold>
														{item.startPath.origin.alias}
													</Text>
													<Text color="gray.400">{item.startPath.origin.state}</Text>
												</Box>

												<View position="absolute" flex={1} w="full">
													<Box
														position="absolute"
														flex={1}
														w="full"
														h="1/2"
														borderStyle="dashed"
														borderBottomWidth="2"
														borderColor="gray.400"
													/>
													<Center>
														<Box rounded="xl" bgColor="white" p="2">
															<Icon name="airplane" size="lg" color="darkText" />
														</Box>
													</Center>
												</View>

												<Box zIndex={9} bgColor="white">
													<Text color="darkBlue.500" textAlign="right" bold>
														{item.startPath.destination.alias}
													</Text>
													<Text color="gray.400">{item.startPath.destination.state}</Text>
												</Box>
											</Stack>

											<Stack direction="row" justifyContent="space-between">
												<Box>
													<Text bold>
														{format(new Date(item.endPath.origin.date), 'HH:mm')}
													</Text>
													<Text color="gray.400">
														{format(new Date(item.endPath.origin.date), 'PP', {
															locale: ptBR,
														})}
													</Text>
												</Box>

												<Box>
													<Text textAlign="right" bold>
														{format(new Date(item.endPath.destination.date), 'HH:mm')}
													</Text>
													<Text color="gray.400">
														{format(new Date(item.endPath.destination.date), 'PP', {
															locale: ptBR,
														})}
													</Text>
												</Box>
											</Stack>

											<Stack direction="row" justifyContent="space-between">
												<Stack direction="row" space="1" alignItems="center">
													<AspectRatio ratio={{ base: 1 }} w="8" h="8">
														<Image
															source={{ uri: item.startPath.company.logo.uri }}
															alt={item.startPath.company.logo.alt}
															alignSelf="stretch"
															resizeMode="cover"
															w="full"
															h="full"
														/>
													</AspectRatio>

													<Text color="gray.400">{item.startPath.company.name}</Text>
												</Stack>

												<Text color="gray.400">
													{formatDistance(
														new Date(item.startPath.origin.date),
														new Date(item.startPath.destination.date),
														{ locale: ptBR }
													)}
												</Text>
											</Stack>

											<View flex={1} py="4">
												<Divider />

												<ZStack mt={-5}>
													<Center w="full">
														<Box
															p="2"
															rounded="full"
															bgColor="white"
															borderWidth="2"
															borderColor="gray.200"
														>
															<Text color="gray.400" fontSize="xs">
																{item.accommodation.days} noites em{' '}
																{item.accommodation.name}
															</Text>
														</Box>
													</Center>
												</ZStack>
											</View>

											<Stack
												position="relative"
												direction="row"
												space="2"
												alignItems="center"
												justifyContent="space-between"
												mt={-2}
											>
												<Box zIndex={9} bgColor="white">
													<Text color="amber.600" bold>
														{item.endPath.origin.alias}
													</Text>
													<Text color="gray.400">{item.endPath.origin.state}</Text>
												</Box>

												<View position="absolute" flex={1} w="full">
													<Box
														position="absolute"
														flex={1}
														w="full"
														h="1/2"
														borderStyle="dashed"
														borderBottomWidth="2"
														borderColor="gray.400"
													/>
													<Center>
														<Box rounded="xl" bgColor="white" p="2">
															<Icon name="airplane" size="lg" color="darkText" />
														</Box>
													</Center>
												</View>

												<Box zIndex={9} bgColor="white">
													<Text color="darkBlue.500" textAlign="right" bold>
														{item.endPath.destination.alias}
													</Text>
													<Text color="gray.400">{item.endPath.destination.state}</Text>
												</Box>
											</Stack>

											<Stack direction="row" justifyContent="space-between">
												<Box>
													<Text bold>
														{format(new Date(item.endPath.origin.date), 'HH:mm')}
													</Text>
													<Text color="gray.400">
														{format(new Date(item.endPath.origin.date), 'PP', {
															locale: ptBR,
														})}
													</Text>
												</Box>

												<Box>
													<Text textAlign="right" bold>
														{format(new Date(item.endPath.destination.date), 'HH:mm')}
													</Text>
													<Text color="gray.400">
														{format(new Date(item.endPath.destination.date), 'PP', {
															locale: ptBR,
														})}
													</Text>
												</Box>
											</Stack>

											<Stack direction="row" justifyContent="space-between">
												<Stack direction="row" space="1" alignItems="center">
													<AspectRatio ratio={{ base: 1 }} w="8" h="8">
														<Image
															source={{ uri: item.endPath.company.logo.uri }}
															alt={item.endPath.company.logo.alt}
															alignSelf="stretch"
															resizeMode="cover"
															w="full"
															h="full"
														/>
													</AspectRatio>

													<Text color="gray.400">{item.endPath.company.name}</Text>
												</Stack>

												<Text color="gray.400">
													{formatDistance(
														new Date(item.endPath.origin.date),
														new Date(item.endPath.destination.date),
														{ locale: ptBR }
													)}
												</Text>
											</Stack>
										</Stack>
									</Card.Body>

									<Card.Footer>
										<Stack
											direction="row"
											space="1"
											alignItems="baseline"
											justifyContent="space-between"
										>
											<Text>Total</Text>

											<Text bold fontSize="2xl">
												R$ {item.totalPrice}
											</Text>
										</Stack>
									</Card.Footer>
								</Card.Content>
							</Card>
						)}
					/>
				</SafeAreaView>
			</BaseScreen>
		</>
	);
}
