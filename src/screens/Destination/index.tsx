import React, { useState } from 'react';

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

// --- Interfaces ---
import { IDestination } from '@interfaces/IDestination';

export default function DestinationScreen({
	navigation,
	route: { params },
}: TDestinationParamProps) {
	const [destination, setDestination] = useState<IDestination>(params.destination);

	const handleGoBack = () => {
		const returnScreen = params?.returnScreen;

		return returnScreen ? navigation.navigate(returnScreen) : navigation.goBack();
	};

	const handleFavoritePress = () => {
		setDestination({ ...destination, favorited: !destination.favorited });
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
				<Box flex={1} mx={-5}>
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
						<Stack space="6" px="5" pb="10">
							<ImageCard
								image={{ uri: destination.image.uri, alt: destination.image.alt }}
								title={destination.name}
								sideContent={
									<>
										<IconButton
											name={destination.favorited ? 'heart' : 'heart-outline'}
											color={destination.favorited ? 'rose.500' : 'black'}
											bgColor="white"
											shadow="3"
											onPress={handleFavoritePress}
										/>

										<IconButton name="share-social" bgColor="white" shadow="3" />

										<IconButton
											name="map"
											bgColor="white"
											shadow="3"
											onPress={() =>
												navigation.navigate('Map', {
													geolocation: destination.geolocation,
													zoomLevel: 0,
												})
											}
										/>
									</>
								}
							>
								<ImageCard.Content>
									<Stack direction="row" space="1" alignItems="baseline">
										<Icon name="star" color="amber.400" />
										<Text color="lightText">
											{destination.rate} ({destination.reviews} reviews)
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

								<Text>{destination.description}</Text>
							</Stack>

							<Stack space="2">
								<Heading fontSize="xl">Galeria</Heading>

								<Gallery data={destination.gallery} limit={3} />
							</Stack>
						</Stack>
					</ScrollView>
				</Box>
			</BaseScreen>
		</>
	);
}
