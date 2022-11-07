import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Native-Base ---
import { Pressable } from 'native-base';

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
		<SafeAreaView style={{ flex: 1, marginTop: 20, marginHorizontal: -20 }}>
			<MasonryList
				data={data}
				keyExtractor={item => item._id}
				numColumns={numColumns}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{
					marginTop: -16,
					marginLeft: -16,
					paddingHorizontal: 20,
					alignSelf: 'stretch',
				}}
			/>
		</SafeAreaView>
	);
}
