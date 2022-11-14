import React from 'react';

// --- React Navigation ---
import { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

// --- Configs ---
import tabNavigatorConfig from '@configs/tabNavigatorConfig';

// --- Navigation ---
import HomeStack, { THomeStackParamList } from '@navigation/HomeStack';
import FavoritesStack, { TFavoritesStackParamList } from '@navigation/FavoritesStack';
import ScheduleStack, { TScheduleStackParamList } from '@navigation/ScheduleStack';
import AccountStack, { TAccountStackParamList } from '@navigation/AccountStack';
import AuthStack, { TAuthStackParamList } from '@navigation/AuthStack';

// --- Stores ---
import useAuthStore from '@stores/auth';

export type TRootTabParamList = {
	Home: NavigatorScreenParams<THomeStackParamList>;
	Favorites: NavigatorScreenParams<TFavoritesStackParamList>;
	Schedule: NavigatorScreenParams<TScheduleStackParamList>;
	Account: NavigatorScreenParams<TAccountStackParamList>;
	Auth: NavigatorScreenParams<TAuthStackParamList>;
};

export type TRootTabScreenProps<T extends keyof TRootTabParamList> = StackScreenProps<
	TRootTabParamList,
	T
>;

const Tab = createBottomTabNavigator<TRootTabParamList>();

export default function TabNavigator() {
	const { isAuthenticated } = useAuthStore(state => state);

	return (
		<Tab.Navigator {...tabNavigatorConfig}>
			{isAuthenticated ? (
				<Tab.Group>
					<Tab.Screen name="Home" component={HomeStack} />
					<Tab.Screen name="Favorites" component={FavoritesStack} />
					<Tab.Screen name="Schedule" component={ScheduleStack} />
					<Tab.Screen name="Account" component={AccountStack} />
				</Tab.Group>
			) : (
				<Tab.Group screenOptions={{ tabBarStyle: { display: 'none' } }}>
					<Tab.Screen name="Auth" component={AuthStack} />
				</Tab.Group>
			)}
		</Tab.Navigator>
	);
}
