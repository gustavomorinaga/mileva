import React from 'react';

// --- React Navigation ---
import { createStackNavigator } from '@react-navigation/stack';

// --- Screens ---
import HomeScreen from '@screens/Home';
import AccommodationDetailsScreen from '@screens/AccommodationDetails';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

// --- Types ---
import { THomeStackParamList } from '@~types/THomeStackParamList';

const Stack = createStackNavigator<THomeStackParamList>();

export default function HomeStack() {
	return (
		<Stack.Navigator initialRouteName="Home Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Home Root" component={HomeScreen} />
			<Stack.Screen name="Accommodation Details" component={AccommodationDetailsScreen} />
		</Stack.Navigator>
	);
}
