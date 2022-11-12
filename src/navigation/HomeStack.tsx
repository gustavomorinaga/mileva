import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList } from '@navigation/TabNavigator';

// --- Screens ---
import HomeScreen from '@screens/Home';
import AccommodationScreen from '@screens/Accommodation';
import HotelsScreen from '@screens/Hotels';
import HotelScreen from '@screens/Hotel';
import PassagesScreen from '@screens/Passages';
import PackagesScreen from '@screens/Packages';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

export type THomeStackParamList = {
	'Home Root': undefined;
	Accommodation: undefined;
	Hotels: undefined;
	Hotel: undefined;
	Passages: undefined;
	Packages: undefined;
};

export type THomeParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<THomeStackParamList, 'Home Root'>
>;
export type TAccommodationParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<THomeStackParamList, 'Accommodation'>
>;
export type THotelsParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<THomeStackParamList, 'Hotels'>
>;
export type THotelParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<THomeStackParamList, 'Hotel'>
>;
export type TPassagesParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<THomeStackParamList, 'Passages'>
>;
export type TPackagesParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<THomeStackParamList, 'Passages'>
>;

const Stack = createStackNavigator<THomeStackParamList>();

export default function HomeStack() {
	return (
		<Stack.Navigator initialRouteName="Home Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Home Root" component={HomeScreen} />
			<Stack.Screen name="Accommodation" component={AccommodationScreen} />
			<Stack.Screen name="Hotels" component={HotelsScreen} />
			<Stack.Screen name="Hotel" component={HotelScreen} />
			<Stack.Screen name="Passages" component={PassagesScreen} />
			<Stack.Screen name="Packages" component={PackagesScreen} />
		</Stack.Navigator>
	);
}
