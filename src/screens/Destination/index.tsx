import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { TDestinationParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import { Box, Button, Heading, ScrollView, Stack, Text, View } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import ImageCard from '@components/ImageCard';
import Gallery from '@components/Gallery';

const data = {
	_id: 1,
	name: 'Grécia',
	image: {
		uri: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
		alt: 'Grécia',
	},
	reviews: 789,
	rate: 4.5,
	favorited: true,
	description:
		'A Grécia é um país do sudeste da Europa com milhares de ilhas espalhadas pelos mares Egeu e Jônico. Bastante influente na antiguidade, a nação é considerada o berço da civilização ocidental. Atenas, sua capital, conserva monumentos como a Acrópole, do século V a.C., onde fica o templo Partenon. A Grécia também é conhecida por suas praias, como Santorini, com suas areias escuras, e os festivos complexos hoteleiros de Míconos.',
	gallery: [
		{
			_id: '1',
			uri: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e3794a0b646d638627afb626bf9ee46f472feb1/big-0bb2a2bea537c680f141d40cb484d888.jpg',
			alt: 'Grécia',
		},
		{
			_id: '2',
			uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
			alt: 'Grécia',
		},
		{
			_id: '3',
			uri: 'https://www.remessaonline.com.br/blog/wp-content/uploads/2019/11/pontos-turisticos-na-grecia-acropole-1024x680.jpeg.optimal.jpeg',
			alt: 'Grécia',
		},
		{
			_id: '4',
			uri: 'https://www.fuiserviajante.com/wp-content/uploads/2017/11/lugares-para-visitar-na-grecia-navagio-zakynthos1.jpg',
			alt: 'Grécia',
		},
		{
			_id: '5',
			uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
			alt: 'Grécia',
		},
		{
			_id: '6',
			uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
			alt: 'Grécia',
		},
		{
			_id: '7',
			uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
			alt: 'Grécia',
		},
	],
};

export default function DestinationScreen({ navigation, route }: TDestinationParamProps) {
	const [favorited, setFavorited] = useState(data.favorited);

	const handleGoBack = () => {
		const returnScreen = route.params?.returnScreen;

		return returnScreen ? navigation.navigate(returnScreen) : navigation.goBack();
	};

	const handleFavoritePress = () => {
		setFavorited(!favorited);
	};

	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton name="arrow-back" bgColor="white" onPress={handleGoBack} />

					<Heading textAlign="center" color="white">
						Detalhes
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-20}>
				<SafeAreaView style={{ flex: 1, marginHorizontal: -20 }}>
					<Box
						zIndex={99}
						bg={{
							linearGradient: {
								colors: ['transparent', 'darkBlue.500'],
								start: [0, 0.75],
								end: [0, 0],
							},
						}}
						w="full"
						h="8"
					/>
					<ScrollView showsVerticalScrollIndicator={false} mt={-8} pt="6">
						<Stack space="6" px="5" pb="8">
							<ImageCard
								image={{ uri: data.image.uri, alt: data.image.alt }}
								title={data.name}
								sideContent={
									<>
										<IconButton
											name={favorited ? 'heart' : 'heart-outline'}
											color={favorited ? 'rose.500' : 'black'}
											bgColor="white"
											shadow="3"
											onPress={handleFavoritePress}
										/>
										<IconButton name="share-social" bgColor="white" shadow="3" />
									</>
								}
							>
								<ImageCard.Content>
									<Stack direction="row" space="1" alignItems="baseline">
										<Icon name="star" color="amber.400" />
										<Text color="lightText">
											{data.rate} ({data.reviews} reviews)
										</Text>
									</Stack>
								</ImageCard.Content>
							</ImageCard>

							<Button
								size="lg"
								rounded="xl"
								bgColor="darkBlue.500"
								onPress={() => navigation.navigate('Hotels')}
							>
								Ver Hospedagens
							</Button>

							<Stack space="2">
								<Heading fontSize="xl">Sobre</Heading>

								<Text>{data.description}</Text>
							</Stack>

							<Stack space="2">
								<Heading fontSize="xl">Galeria</Heading>

								<Gallery data={data.gallery} />
							</Stack>
						</Stack>
					</ScrollView>
				</SafeAreaView>
			</BaseScreen>
		</>
	);
}
