import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList } from '@navigation/TabNavigator';

// --- Screens ---
import NotificationsScreen from '@screens/Notifications';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

type TNotificationsBottomTab = BottomTabScreenProps<TRootTabParamList, 'Notifications'>;

export type TNotificationsStackParamList = {
	'Notifications Root': undefined;
};

export type TNotificationsParamProps = CompositeScreenProps<
	TNotificationsBottomTab,
	StackScreenProps<TNotificationsStackParamList, 'Notifications Root'>
>;

const Stack = createStackNavigator<TNotificationsStackParamList>();

export default function NotificationsStack() {
	return (
		<Stack.Navigator initialRouteName="Notifications Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Notifications Root" component={NotificationsScreen} />
		</Stack.Navigator>
	);
}
