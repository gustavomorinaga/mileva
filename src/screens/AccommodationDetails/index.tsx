import React from 'react';

// --- React Navigation ---
import { useNavigation } from '@react-navigation/native';

// --- Native-Base ---
import { Button, Heading, ScrollView, Stack, Text } from 'native-base';

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
	],
};

export default function AccommodationDetailsScreen() {
	const navigation = useNavigation<any>();

	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						name="arrow-back"
						bgColor="white"
						onPress={() => navigation.goBack()}
					/>

					<Heading color="white">Detalhes</Heading>

					<IconButton name="menu" bgColor="white" />
				</Stack>
			</Header>

			<BaseScreen mt={-16}>
				<ScrollView mx={-6} px="6">
					<Stack space="6">
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
									<IconButton name="heart-outline" bgColor="white" shadow="3" />
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
