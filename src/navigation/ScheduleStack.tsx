import React from 'react';

// --- React Navigation ---
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Screens ---
import ScheduleScreen from '@screens/Schedule';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

export type TScheduleStackParamList = {
	'Schedule Root': undefined;
};

export type TScheduleParamProps = StackScreenProps<
	TScheduleStackParamList,
	'Schedule Root'
>;

const Stack = createStackNavigator<TScheduleStackParamList>();

export default function ScheduleStack() {
	return (
		<Stack.Navigator initialRouteName="Schedule Root" {...stackNavigatorConfig}>
			<Stack.Screen name="Schedule Root" component={ScheduleScreen} />
		</Stack.Navigator>
	);
}
