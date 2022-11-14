import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList, TRootTabScreenProps } from '@navigation/TabNavigator';

// --- Screens ---
import HomeScreen from '@screens/Home';
import AccommodationScreen from '@screens/Accommodation';
import HotelsScreen from '@screens/Hotels';
import HotelScreen from '@screens/Hotel';
import PassagesScreen from '@screens/Passages';
import PackagesScreen from '@screens/Packages';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

type THomeBottomTab<T extends keyof TRootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList, T>,
	TRootTabScreenProps<keyof TRootTabParamList>
>;

export type THomeStackParamList = {
	'Home Root': undefined;
	Accommodation: {
		returnScreen?: keyof TRootTabParamList;
		returnScreenKey?: string;
	};
	Hotels: undefined;
	Hotel: undefined;
	Passages: undefined;
	Packages: undefined;
};

export type THomeParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Home Root'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type TAccommodationParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Accommodation'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type THotelsParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Hotels'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type THotelParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Hotel'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type TPassagesParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Passages'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type TPackagesParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Packages'>,
	THomeBottomTab<keyof TRootTabParamList>
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
