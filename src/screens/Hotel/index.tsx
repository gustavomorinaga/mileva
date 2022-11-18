import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { THotelParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	Heading,
	Image,
	ScrollView,
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
import Gallery from '@components/Gallery';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

const data = {
	_id: 'id123',
	image: {
		uri: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/30/97/309756028.jpeg',
		alt: 'Sofitel Athens Airport Hotel',
	},
	title: 'Sofitel Athens Airport Hotel',
	description:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti vero dignissimos sunt quas voluptatibus voluptatum? Sequi earum quae voluptates nihil distinctio magni soluta laudantium doloremque tenetur, aspernatur quibusdam at architecto.',
	location: 'Spata',
	proximity: null,
	rate: 4.8,
	reviews: 3241,
	price: 843,
	services: ['wifi', 'transport', 'coffee', 'spa'],
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

const SERVICES_ICONS: { [k: string]: keyof typeof Ionicons.glyphMap } = {
	wifi: 'wifi',
	transport: 'car-sport',
	coffee: 'cafe',
	spa: 'flower',
};

export default function HotelScreen({ navigation }: THotelParamProps) {
	return (
		<View position="relative" flex={1}>
			<View zIndex={9}>
				<ZStack position="absolute" zIndex={99} w="full">
					<Header containerStyle={{ bgColor: 'transparent' }}>
						<Stack direction="row" alignItems="center" justifyContent="space-between">
							<IconButton
								name="arrow-back"
								bgColor="white"
								shadow="5"
								onPress={() => navigation.goBack()}
							/>

							<View w="8" />

							<IconButton name="share-social" bgColor="white" shadow="5" />
						</Stack>
					</Header>
				</ZStack>

				<AspectRatio zIndex={10} ratio={{ base: 1 }} w="full">
					<Image
						source={{ uri: data.image.uri }}
						alt={data.image.alt}
						height="full"
						alignSelf="stretch"
						resizeMode="cover"
					/>
				</AspectRatio>
			</View>

			<BaseScreen mt={-16}>
				<SafeAreaView style={{ flex: 1, marginHorizontal: -20 }}>
					<Box
						overflow="hidden"
						p="5"
						bgColor="warmGray.100"
						borderTopLeftRadius="2xl"
						borderTopRightRadius="2xl"
						shadow="5"
					>
						<Box
							zIndex={99}
							bg={{
								linearGradient: {
									colors: ['transparent', 'warmGray.100'],
									start: [0, 0.75],
									end: [0, 0],
								},
							}}
							w="full"
							h="8"
							mt={-4}
						/>
						<ScrollView mt={-8} pt="4" showsVerticalScrollIndicator={false}>
							<Stack space="6">
								<Heading>{data.title}</Heading>

								<Stack space="2">
									<Stack direction="row" space="2" alignItems="baseline">
										<Icon name="location" color="red.500" />

										<Stack direction="row" space="1">
											<Text>{data.location}</Text>
											{data.proximity && (
												<Text color="gray.400">({data.proximity}Km do destino)</Text>
											)}
										</Stack>
									</Stack>

									<Stack direction="row" space="2" alignItems="baseline">
										<Icon name="star" color="amber.400" />

										<Stack direction="row" space="1">
											<Text>{data.rate}</Text>
											<Text color="gray.400">({data.reviews} reviews)</Text>
										</Stack>
									</Stack>
								</Stack>

								<Stack space="2">
									<Heading fontSize="xl">Sobre</Heading>

									<Text>{data.description}</Text>
								</Stack>

								<Stack space="2">
									<Heading fontSize="xl">Serviços</Heading>

									<Stack direction="row" space="2">
										{data.services.map((item, index) => (
											<Box key={index} p="2" rounded="xl" bgColor="darkBlue.200">
												<Icon name={SERVICES_ICONS[item]} color="darkBlue.500" />
											</Box>
										))}
									</Stack>
								</Stack>

								<Stack space="2">
									<Heading fontSize="xl">Galeria</Heading>

									<Gallery data={data.gallery} />
								</Stack>
							</Stack>
						</ScrollView>
					</Box>
				</SafeAreaView>
			</BaseScreen>
		</View>
	);
}
