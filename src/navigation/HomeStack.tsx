import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList, TRootTabScreenProps } from '@navigation/TabNavigator';

// --- Screens ---
import HomeScreen from '@screens/Home';
import DestinationScreen from '@screens/Destination';
import HotelsScreen from '@screens/Hotels';
import HotelScreen from '@screens/Hotel';
import TicketsScreen from '@screens/Tickets';
import PackagesScreen from '@screens/Packages';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';
import MapScreen from '@screens/Map';

type THomeBottomTab<T extends keyof TRootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList, T>,
	TRootTabScreenProps<keyof TRootTabParamList>
>;

export type THomeStackParamList = {
	'Home Root': undefined;
	Destination: {
		returnScreen?: keyof TRootTabParamList;
		returnScreenKey?: string;
	};
	Hotels: undefined;
	Hotel: undefined;
	Tickets: undefined;
	Packages: undefined;
	Map: undefined;
};

export type THomeParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Home Root'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type TDestinationParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Destination'>,
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
export type TTicketsParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Tickets'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type TPackagesParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Packages'>,
	THomeBottomTab<keyof TRootTabParamList>
>;
export type TMapParamProps = CompositeScreenProps<
	StackScreenProps<THomeStackParamList, 'Map'>,
	THomeBottomTab<keyof TRootTabParamList>
>;

const Stack = createStackNavigator<THomeStackParamList>();

export default function HomeStack() {
	return (
		<Stack.Navigator initialRouteName="Home Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Home Root" component={HomeScreen} />
			<Stack.Screen name="Destination" component={DestinationScreen} />
			<Stack.Screen name="Hotels" component={HotelsScreen} />
			<Stack.Screen name="Hotel" component={HotelScreen} />
			<Stack.Screen name="Tickets" component={TicketsScreen} />
			<Stack.Screen name="Packages" component={PackagesScreen} />
			<Stack.Screen name="Map" component={MapScreen} />
		</Stack.Navigator>
	);
}
