import React from 'react';

// --- Navigation ---
import { THotelParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	Heading,
	Image,
	Pressable,
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
			uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_r_021.jpg',
			alt: 'Grécia',
		},
		{
			_id: '2',
			uri: 'https://cdn.worldota.net/t/1024x768/content/ff/83/ff83ba69bfa233efb45c11d4b12db43aea09b6ea.jpeg',
			alt: 'Grécia',
		},
		{
			_id: '3',
			uri: 'https://images.trvl-media.com/hotels/1000000/690000/688200/688125/8d9a53dd_z.jpg',
			alt: 'Grécia',
		},
		{
			_id: '4',
			uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_ro_038.jpg',
			alt: 'Grécia',
		},
		{
			_id: '5',
			uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_ro_012.jpg',
			alt: 'Grécia',
		},
	],
};

const SERVICES_ICONS: {
	[k: string]: { label: string; icon: keyof typeof Ionicons.glyphMap };
} = {
	wifi: {
		label: 'Wi-Fi',
		icon: 'wifi',
	},
	transport: {
		label: 'Transporte',
		icon: 'car-sport',
	},
	coffee: {
		label: 'Café da manhã',
		icon: 'cafe',
	},
	spa: {
		label: 'Spa',
		icon: 'flower',
	},
};

export default function HotelScreen({ navigation }: THotelParamProps) {
	const hasRating = Boolean(data.rate) && Boolean(data.reviews);

	return (
		<View position="relative" flex={1}>
			<View zIndex={9}>
				<ZStack position="absolute" zIndex={99} w="full">
					<Header containerStyle={{ bgColor: 'transparent' }}>
						<Stack direction="row" alignItems="center" justifyContent="space-between">
							<IconButton
								accessibilityHint="Voltar"
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
				<Box
					flex={1}
					overflow="hidden"
					mx={-5}
					pt="5"
					px="5"
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
						<Stack space="6" pb="4">
							<Heading>{data.title}</Heading>

							<Stack space="2">
								<Pressable onPress={() => navigation.navigate('Map')}>
									<Stack direction="row" space="2" alignItems="baseline">
										<Icon name="location" color="red.500" />

										<Stack direction="row" space="1">
											<Text>{data.location}</Text>
											{data.proximity && (
												<Text color="gray.400">({data.proximity}Km do destino)</Text>
											)}
										</Stack>
									</Stack>
								</Pressable>

								<Stack direction="row" space="2" alignItems="baseline">
									{hasRating ? (
										<>
											<Icon name="star" color="amber.400" />

											<Stack direction="row" space="1">
												<Text>{data.rate}</Text>
												<Text color="gray.400">({data.reviews} reviews)</Text>
											</Stack>
										</>
									) : (
										<>
											<Icon name="star-outline" color="gray.400" />

											<Text color="gray.400">Não há avaliações.</Text>
										</>
									)}
								</Stack>
							</Stack>

							<Stack space="2">
								<Heading fontSize="xl">Sobre</Heading>

								{data.description ? (
									<Text>{data.description}</Text>
								) : (
									<Box flex={1} p="2" rounded="xl" bgColor="warmGray.200">
										<Text color="gray.400">Nenhuma informação disponível.</Text>
									</Box>
								)}
							</Stack>

							<Stack space="2">
								<Heading fontSize="xl">Serviços</Heading>

								<Stack direction="row" space="2">
									{data.services.length ? (
										data.services.map((item, index) => (
											<Box key={index} p="2" rounded="xl" bgColor="darkBlue.200">
												<Icon name={SERVICES_ICONS[item].icon} color="darkBlue.500" />
											</Box>
										))
									) : (
										<Box flex={1} p="2" rounded="xl" bgColor="warmGray.200">
											<Text color="gray.400">Nenhuma serviço informado.</Text>
										</Box>
									)}
								</Stack>
							</Stack>

							<Stack space="2" pb="4">
								<Heading fontSize="xl">Galeria</Heading>

								{data.gallery.length ? (
									<Gallery data={data.gallery} limit={3} />
								) : (
									<Box flex={1} p="2" rounded="xl" bgColor="warmGray.200">
										<Text color="gray.400">Nenhuma imagem disponível.</Text>
									</Box>
								)}
							</Stack>
						</Stack>
					</ScrollView>
				</Box>
			</BaseScreen>
		</View>
	);
}
