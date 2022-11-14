import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { TFavoritesParamProps } from '@navigation/FavoritesStack';

// --- Native-Base ---
import { Box, FlatList, Heading, Stack, ZStack } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import IconButton from '@components/IconButton';
import ImageCard from '@components/ImageCard';

const data = [
	{
		_id: '1',
		name: 'Grécia',
		image: {
			uri: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e3794a0b646d638627afb626bf9ee46f472feb1/big-0bb2a2bea537c680f141d40cb484d888.jpg',
			alt: 'Grécia',
		},
	},
	{
		_id: '2',
		name: 'Canadá',
		image: {
			uri: 'http://www.yazigi.com.br/galeria/repositorio/images/noticias/pontos-turisticos-canada/banff-national-park.jpg',
			alt: 'Canadá',
		},
	},
	{
		_id: '3',
		name: 'Chile',
		image: {
			uri: 'https://a.cdn-hotels.com/gdcs/production48/d1338/3cb6a4d4-c771-483c-b66b-3557af9f5e19.jpg',
			alt: 'Chile',
		},
	},
];

export default function FavoritesScreen({ navigation, route }: TFavoritesParamProps) {
	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="center">
					<Heading textAlign="center" color="white">
						Favoritos
					</Heading>
				</Stack>
			</Header>

			<BaseScreen mt={-16}>
				<SafeAreaView style={{ flex: 1, marginTop: -8, marginHorizontal: -20 }}>
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
						data={data}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<ImageCard
								title={item.name}
								image={item.image}
								sideContent={
									<IconButton name="heart" color="rose.500" bgColor="white" shadow="3" />
								}
								containerProps={{ mb: 4, h: 40 }}
								onPress={() =>
									navigation.navigate('Home', {
										screen: 'Accommodation',
										params: {
											returnScreen: 'Favorites',
										},
										initial: false,
									})
								}
							/>
						)}
						contentContainerStyle={{
							marginTop: -4,
							paddingTop: 4,
							paddingBottom: 10,
							paddingHorizontal: 20,
						}}
						pt="4"
					/>
				</SafeAreaView>
			</BaseScreen>
		</>
	);
}
