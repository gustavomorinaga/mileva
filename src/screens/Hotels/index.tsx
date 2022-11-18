import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { THotelsParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import { Box, FlatList, Heading, Stack, Text, View, ZStack } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import SearchInput from '@components/SearchInput';
import Card from '@components/Card';

const data = [
	{
		_id: 'id123',
		image: {
			uri: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/30/97/309756028.jpeg',
			alt: 'Sofitel Athens Airport Hotel',
		},
		title: 'Sofitel Athens Airport Hotel',
		location: 'Spata',
		proximity: null,
		rate: 4.8,
		reviews: 3241,
		price: 843,
	},
	{
		_id: 'id124',
		image: {
			uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
			alt: 'Pioneer LHS Chaise Lounger in Grey Colour',
		},
		title: 'Mirante da Colyna',
		location: 'Monte Verde - MG',
		proximity: 713,
		rate: 4.8,
		reviews: 3241,
		price: 300,
	},
	{
		_id: 'id125',
		image: {
			uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
			alt: 'Pioneer LHS Chaise Lounger in Grey Colour',
		},
		title: 'Mirante da Colyna',
		location: 'Monte Verde - MG',
		proximity: 713,
		rate: 4.8,
		reviews: 3241,
		price: 300,
	},
	{
		_id: 'id126',
		image: {
			uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
			alt: 'Pioneer LHS Chaise Lounger in Grey Colour',
		},
		title: 'Mirante da Colyna',
		location: 'Monte Verde - MG',
		proximity: 713,
		rate: 4.8,
		reviews: 3241,
		price: 300,
	},
	{
		_id: 'id127',
		image: {
			uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
			alt: 'Pioneer LHS Chaise Lounger in Grey Colour',
		},
		title: 'Mirante da Colyna',
		location: 'Monte Verde - MG',
		proximity: 713,
		rate: 4.8,
		reviews: 3241,
		price: 300,
	},
];

export default function HotelsScreen({ navigation }: THotelsParamProps) {
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
					<SearchInput placeholder="Pesquisar um hotel..." flex={1} />

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
						data={data}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Card
								image={item.image}
								containerProps={{ mx: 5, mb: 5 }}
								onPress={() => navigation.navigate('Hotel')}
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
				</SafeAreaView>
			</BaseScreen>
		</>
	);
}
