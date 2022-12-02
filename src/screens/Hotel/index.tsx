import React, { useState } from 'react';

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

// --- Interfaces ---
import { IHotel } from '@interfaces/IHotel';

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

export default function HotelScreen({ navigation, route: { params } }: THotelParamProps) {
	const [hotel] = useState<IHotel>(params.hotel);

	const hasRating = Boolean(hotel.rate) && Boolean(hotel.reviews);

	return (
		<View position="relative" flex={1}>
			<View zIndex={9}>
				<ZStack position="absolute" zIndex={99} w="full">
					<Header containerStyle={{ bgColor: 'transparent' }}>
						<Stack direction="row" alignItems="flex-start" justifyContent="space-between">
							<IconButton
								name="arrow-back"
								bgColor="white"
								shadow="5"
								onPress={() => navigation.goBack()}
							/>

							<View w="8" />

							<Stack space="2">
								<IconButton name="share-social" bgColor="white" shadow="5" />
								<IconButton
									name="map"
									bgColor="white"
									shadow="5"
									onPress={() =>
										navigation.navigate('Map', { geolocation: hotel.geolocation })
									}
								/>
							</Stack>
						</Stack>
					</Header>
				</ZStack>

				<AspectRatio zIndex={10} ratio={{ base: 1 }} w="full">
					<Image
						source={{ uri: hotel.image.uri }}
						alt={hotel.image.alt}
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
							<Heading>{hotel.title}</Heading>

							<Stack space="2">
								<Pressable onPress={() => navigation.navigate('Map')}>
									<Stack direction="row" space="2" alignItems="baseline">
										<Icon name="location" color="red.500" />

										<Stack direction="row" space="1">
											<Text>{hotel.location}</Text>
											{hotel.proximity && (
												<Text color="gray.400">({hotel.proximity}Km do destino)</Text>
											)}
										</Stack>
									</Stack>
								</Pressable>

								<Stack direction="row" space="2" alignItems="baseline">
									{hasRating ? (
										<>
											<Icon name="star" color="amber.400" />

											<Stack direction="row" space="1">
												<Text>{hotel.rate}</Text>
												<Text color="gray.400">({hotel.reviews} reviews)</Text>
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

								{hotel.description ? (
									<Text>{hotel.description}</Text>
								) : (
									<Box flex={1} p="2" rounded="xl" bgColor="warmGray.200">
										<Text color="gray.400">Nenhuma informação disponível.</Text>
									</Box>
								)}
							</Stack>

							<Stack space="2">
								<Heading fontSize="xl">Serviços</Heading>

								<Stack direction="row" space="2">
									{hotel?.services?.length ? (
										hotel.services.map((item, index) => (
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

								{hotel?.gallery?.length ? (
									<Gallery data={hotel.gallery} limit={3} />
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
