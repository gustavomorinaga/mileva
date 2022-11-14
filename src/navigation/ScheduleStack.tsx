import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList, TRootTabScreenProps } from '@navigation/TabNavigator';

// --- Screens ---
import ScheduleScreen from '@screens/Schedule';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

type TScheduleBottomTab<T extends keyof TRootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList, T>,
	TRootTabScreenProps<keyof TRootTabParamList>
>;

export type TScheduleStackParamList = {
	'Schedule Root': undefined;
};

export type TScheduleParamProps = CompositeScreenProps<
	StackScreenProps<TScheduleStackParamList, 'Schedule Root'>,
	TScheduleBottomTab<keyof TRootTabParamList>
>;

const Stack = createStackNavigator<TScheduleStackParamList>();

export default function ScheduleStack() {
	return (
		<Stack.Navigator initialRouteName="Schedule Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Schedule Root" component={ScheduleScreen} />
		</Stack.Navigator>
	);
}
