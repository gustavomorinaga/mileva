import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Native-Base ---
import { Box, Pressable, ZStack } from 'native-base';

// --- React Navigation ---
import { useNavigation } from '@react-navigation/native';

// --- Reanimated ---
import MasonryList from 'reanimated-masonry-list';

// --- Components ---
import MasonryItem from './MasonryItem';

// --- Interfaces ---
import { IImage } from '@interfaces/IImage';

interface MasonryProps {
	data: object & IImage[];
	numColumns: number;
	renderChild?: ({ item, i }: { item: object; i?: number }) => React.ReactElement;
	screen?: {
		name: string;
		queryParams?: any[];
	};
}

export default function Masonry({ data, numColumns, renderChild, screen }: MasonryProps) {
	const navigation = useNavigation<any>();

	const renderItem = ({ item }): React.ReactElement => {
		return (
			<Pressable onPress={() => navigation.navigate(screen.name)}>
				<MasonryItem image={item} children={renderChild({ item })} />
			</Pressable>
		);
	};

	return (
		<SafeAreaView style={{ flex: 1, marginTop: 10, marginHorizontal: -20 }}>
			<ZStack zIndex={99}>
				<Box
					bg={{
						linearGradient: {
							colors: ['transparent', 'muted.100'],
							start: [0, 0.75],
							end: [0, 0],
						},
					}}
					w="full"
					h="8"
				/>
			</ZStack>
			<MasonryList
				data={data}
				keyExtractor={item => item._id}
				numColumns={numColumns}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: -16,
					marginLeft: -16,
					paddingTop: 20,
					paddingHorizontal: 20,
					paddingBottom: 8,
					alignSelf: 'stretch',
				}}
			/>
		</SafeAreaView>
	);
}
