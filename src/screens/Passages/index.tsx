import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { TPassagesParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	Center,
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
import { format, formatISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const data = [
	{
		_id: '1',
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
	{
		_id: '2',
		company: {
			_id: '2',
			name: 'Azul',
			logo: {
				uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_AD.png?s=40x40',
				alt: 'Azul Logo',
			},
		},
		origin: {
			alias: 'CNF',
			state: 'Minas Gerais',
			date: formatISO(new Date('2022-05-23T21:10:00')),
		},
		destination: {
			alias: 'CGH',
			state: 'São Paulo',
			date: formatISO(new Date('2022-05-23T22:25:00')),
		},
		price: 636,
	},
	{
		_id: '3',
		company: {
			_id: '3',
			name: 'GOL',
			logo: {
				uri: 'https://www.edestinos.com.br/_fe/img/al_logo_signet_G3.png?s=40x40',
				alt: 'GOL Logo',
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
];

export default function PassagesScreen({ navigation }: TPassagesParamProps) {
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
						Passagens
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<Stack direction="row" space="2" mb="4">
					<SearchInput placeholder="Pesquisar um destino..." flex={1} />

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
									colors: ['transparent', 'muted.100'],
									start: [0, 0.75],
									end: [0, 0],
								},
							}}
							w="full"
							h="8"
						/>
					</ZStack>
					<FlatList
						data={data}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Card containerProps={{ mx: 5, mb: 5 }}>
								<Card.Content>
									<Card.Body>
										<Stack position="relative" space="4">
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

											<Stack
												direction="row"
												space="2"
												alignItems="center"
												justifyContent="space-between"
												mt={-2}
											>
												<Box bgColor="white">
													<Text color="amber.600" bold>
														{item.origin.alias}
													</Text>
													<Text color="gray.400">{item.origin.state}</Text>
												</Box>

												<Box bgColor="white">
													<Text color="darkBlue.500" textAlign="right" bold>
														{item.destination.alias}
													</Text>
													<Text color="gray.400">{item.destination.state}</Text>
												</Box>
											</Stack>

											<Stack direction="row" justifyContent="space-between">
												<Box>
													<Text bold>{format(new Date(item.origin.date), 'HH:mm')}</Text>
													<Text color="gray.400">
														{format(new Date(item.origin.date), 'PP', { locale: ptBR })}
													</Text>
												</Box>

												<Box>
													<Text textAlign="right" bold>
														{format(new Date(item.destination.date), 'HH:mm')}
													</Text>
													<Text color="gray.400">
														{format(new Date(item.destination.date), 'PP', {
															locale: ptBR,
														})}
													</Text>
												</Box>
											</Stack>
										</Stack>
									</Card.Body>

									<Card.Footer>
										<Stack direction="row" space="1" justifyContent="space-between">
											<Stack direction="row" space="1" alignItems="center">
												<AspectRatio ratio={{ base: 1 / 1 }} w="8" h="8">
													<Image
														source={{ uri: item.company.logo.uri }}
														alt={item.company.logo.alt}
														alignSelf="stretch"
														resizeMode="cover"
														w="full"
														h="full"
													/>
												</AspectRatio>

												<Text color="gray.400">{item.company.name}</Text>
											</Stack>

											<Text bold fontSize="2xl">
												R$ {item.price}
											</Text>
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
				</SafeAreaView>
			</BaseScreen>
		</>
	);
}
