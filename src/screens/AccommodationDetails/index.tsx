import React, { useState } from 'react';

// --- React Navigation ---
import { useNavigation } from '@react-navigation/native';

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
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ducimus! Possimus optio veniam qui repudiandae quidem ipsum dicta, deleniti reiciendis atque, repellendus deserunt vel quos quasi ex accusantium quam exercitationem.',
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
			uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
			alt: 'Grécia',
		},
		{
			_id: '4',
			uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
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

export default function AccommodationDetailsScreen() {
	const navigation = useNavigation<any>();

	const [favorited, setFavorited] = useState(false);

	const handleFavoritePress = () => {
		setFavorited(!favorited);
	};

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
						Detalhes
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-20}>
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
				<ScrollView showsVerticalScrollIndicator={false} mt={-8} mx={-6} pt="6">
					<Stack space="6" px="6" pb="8">
						<ImageCard
							image={{ uri: data.image.uri, alt: data.image.alt }}
							title={data.name}
							content={
								<Stack direction="row" space="1">
									<Icon name="star" color="amber.400" />
									<Text color="lightText">
										{data.rate} ({data.reviews} reviews)
									</Text>
								</Stack>
							}
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
						/>

						<Button size="lg" rounded="xl" bgColor="darkBlue.500">
							Ver Hospedagens
						</Button>

						<Stack space="2">
							<Heading>Sobre</Heading>

							<Text>{data.description}</Text>
						</Stack>

						<Stack space="2">
							<Heading>Galeria</Heading>

							<Gallery data={data.gallery} />
						</Stack>
					</Stack>
				</ScrollView>
			</BaseScreen>
		</>
	);
}
