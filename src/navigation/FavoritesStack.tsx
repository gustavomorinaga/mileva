import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList } from '@navigation/TabNavigator';

// --- Screens ---
import FavoritesScreen from '@screens/Favorites';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

type TFavoritesBottomTab = BottomTabScreenProps<TRootTabParamList, 'Favorites'>;

export type TFavoritesStackParamList = {
	'Favorites Root': undefined;
};

export type TFavoritesParamProps = CompositeScreenProps<
	TFavoritesBottomTab,
	StackScreenProps<TFavoritesStackParamList, 'Favorites Root'>
>;

const Stack = createStackNavigator<TFavoritesStackParamList>();

export default function FavoritesStack() {
	return (
		<Stack.Navigator initialRouteName="Favorites Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Favorites Root" component={FavoritesScreen} />
		</Stack.Navigator>
	);
}
