import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList, TRootTabScreenProps } from '@navigation/TabNavigator';

// --- Screens ---
import ScheduleScreen from '@screens/Schedule';
import TravelPlanScreen from '@screens/TravelPlan';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

type TScheduleBottomTab<T extends keyof TRootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList, T>,
	TRootTabScreenProps<keyof TRootTabParamList>
>;

export type TScheduleStackParamList = {
	'Schedule Root': undefined;
	'Travel Plan': { selectedDate?: string; markedDates?: string[] };
};

export type TScheduleParamProps = CompositeScreenProps<
	StackScreenProps<TScheduleStackParamList, 'Schedule Root'>,
	TScheduleBottomTab<keyof TRootTabParamList>
>;
export type TTravelPLanParamProps = CompositeScreenProps<
	StackScreenProps<TScheduleStackParamList, 'Travel Plan'>,
	TScheduleBottomTab<keyof TRootTabParamList>
>;

const Stack = createStackNavigator<TScheduleStackParamList>();

export default function ScheduleStack() {
	return (
		<Stack.Navigator initialRouteName="Schedule Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Schedule Root" component={ScheduleScreen} />
			<Stack.Screen name="Travel Plan" component={TravelPlanScreen} />
		</Stack.Navigator>
	);
}
