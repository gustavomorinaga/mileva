import React from 'react';

// --- React Navigation ---
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Screens ---
import FavoritesScreen from '@screens/Favorites';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

export type TFavoriteStackParamList = {
	'Favorite Root': undefined;
};

export type TFavoriteParamProps = StackScreenProps<
	TFavoriteStackParamList,
	'Favorite Root'
>;

const Stack = createStackNavigator<TFavoriteStackParamList>();

export default function FavoriteStack() {
	return (
		<Stack.Navigator initialRouteName="Favorite Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Favorite Root" component={FavoritesScreen} />
		</Stack.Navigator>
	);
}
