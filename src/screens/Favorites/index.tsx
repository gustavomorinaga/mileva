import React, { useCallback } from 'react';

// --- Navigation ---
import { TFavoritesParamProps } from '@navigation/FavoritesStack';

// --- Native-Base ---
import { Box, FlatList, Heading, Stack, ZStack } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import IconButton from '@components/IconButton';
import ImageCard from '@components/ImageCard';

// --- Stores ---
import useFavoritesStore from '@stores/favorites';

export default function FavoritesScreen({ navigation }: TFavoritesParamProps) {
	const { favorites, setFavorite } = useFavoritesStore(state => state);

	const handleFavoritePress = useCallback(
		({ item }) => {
			navigation.navigate('Home', {
				screen: 'Destination',
				params: {
					destination: item,

					returnScreen: 'Favorites',
				},
				initial: false,
			});
		},
		[navigation]
	);

	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="center">
					<Heading textAlign="center" color="white">
						Favoritos
					</Heading>
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<Box flex={1} mt={-8} mx={-5}>
					<ZStack zIndex={99}>
						<Box
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
					</ZStack>
					<FlatList
						pt="5"
						contentContainerStyle={{
							marginTop: -4,
							paddingTop: 4,
							paddingBottom: 10,
							paddingHorizontal: 20,
						}}
						data={favorites}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<ImageCard
								title={item.name}
								image={item.image}
								sideContent={
									<IconButton
										name={item.favorited ? 'heart' : 'heart-outline'}
										color={item.favorited ? 'rose.500' : 'black'}
										bgColor="white"
										shadow="3"
										onPress={() => setFavorite(item)}
									/>
								}
								containerProps={{ mb: 4, h: 40 }}
								onPress={() => handleFavoritePress({ item })}
							/>
						)}
					/>
				</Box>
			</BaseScreen>
		</>
	);
}
