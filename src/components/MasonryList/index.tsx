import React, { ReactElement } from 'react';
import { SafeAreaView } from 'react-native';

// --- Reanimated ---
import MasonryList from 'reanimated-masonry-list';

// --- Components ---
import MasonryItem from './MasonryItem';

interface MasonryProps {
	data: any;
	numColumns: number;
}

export default function Masonry({ data, numColumns }: MasonryProps) {
	const renderItem = ({ item }): ReactElement => {
		return <MasonryItem key={item._id} item={item} />;
	};

	return (
		<SafeAreaView style={{ flex: 1, marginTop: 20, marginHorizontal: -20 }}>
			<MasonryList
				data={data}
				keyExtractor={item => item.id}
				numColumns={numColumns}
				renderItem={renderItem}
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
