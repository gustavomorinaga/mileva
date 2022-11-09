import React from 'react';

// --- React Navigation ---
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- Screens ---
import SignInScreen from '@screens/SignIn';
import SignUpScreen from '@screens/SignUp';
import FavoritesScreen from '@screens/Favorites';
import ScheduleScreen from '@screens/Schedule';
import AccountScreen from '@screens/Account';

// --- Configs ---
import tabNavigatorConfig from '@configs/tabNavigatorConfig';
import signScreensConfig from '@configs/signScreensConfig';

// --- Navigation ---
import HomeStack from '@navigation/HomeStack';

// --- Stores ---
import useAuthStore from '@stores/auth';

// --- Types ---
import { TRootTabParamList } from '@~types/TRootTabParamList';

const Tab = createBottomTabNavigator<TRootTabParamList>();

export default function TabNavigator() {
	const { isAuthenticated } = useAuthStore(state => state);

	return (
		<Tab.Navigator {...tabNavigatorConfig}>
			{isAuthenticated ? (
				<Tab.Group>
					<Tab.Screen name="Home" component={HomeStack} />
					<Tab.Screen name="Favorites" component={FavoritesScreen} />
					<Tab.Screen name="Schedule" component={ScheduleScreen} />
					<Tab.Screen name="Account" component={AccountScreen} />
				</Tab.Group>
			) : (
				<Tab.Group>
					<Tab.Screen
						name="Sign In"
						component={SignInScreen}
						options={signScreensConfig}
					/>
					<Tab.Screen
						name="Sign Up"
						component={SignUpScreen}
						options={signScreensConfig}
					/>
				</Tab.Group>
			)}
		</Tab.Navigator>
	);
}
