import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList } from '@navigation/TabNavigator';

// --- Screens ---
import AccountScreen from '@screens/Account';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

export type TAccountStackParamList = {
	'Account Root': undefined;
};

export type TAccountParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<TAccountStackParamList, 'Account Root'>
>;

const Stack = createStackNavigator<TAccountStackParamList>();

export default function AccountStack() {
	return (
		<Stack.Navigator initialRouteName="Account Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Account Root" component={AccountScreen} />
		</Stack.Navigator>
	);
}
