import React from 'react';

// --- React Navigation ---
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- Configs ---
import tabNavigatorConfig from '@configs/tabNavigatorConfig';

// --- Navigation ---
import HomeStack from '@navigation/HomeStack';
import FavoriteStack from '@navigation/FavoriteStack';
import ScheduleStack from './ScheduleStack';
import AccountStack from './AccountStack';
import AuthStack from './AuthStack';

// --- Stores ---
import useAuthStore from '@stores/auth';

export type TRootTabParamList = {
	Home: undefined;
	Favorites: undefined;
	Schedule: undefined;
	Account: undefined;
	Auth: undefined;
};

const Tab = createBottomTabNavigator<TRootTabParamList>();

export default function TabNavigator() {
	const { isAuthenticated } = useAuthStore(state => state);

	return (
		<Tab.Navigator {...tabNavigatorConfig}>
			{isAuthenticated ? (
				<Tab.Group>
					<Tab.Screen name="Home" component={HomeStack} />
					<Tab.Screen name="Favorites" component={FavoriteStack} />
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
