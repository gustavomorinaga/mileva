import React from 'react';

import { NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import SignInScreen from '@screens/signIn';
// import SignUpScreen from '@screens/signUp';
import HomeScreen from '@screens/home';
import FavoritesScreen from '@screens/favorites';
import ScheduleScreen from '@screens/schedule';
import AccountScreen from '@screens/profile';

import tabNavigatorConfig from '@configs/tabNavigatorConfig';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<Tab.Navigator {...tabNavigatorConfig}>
						{/* <Tab.Screen name="Login" component={LoginScreen} /> */}
						<Tab.Screen name="Home" component={HomeScreen} />
						<Tab.Screen name="Favorites" component={FavoritesScreen} />
						<Tab.Screen name="Schedule" component={ScheduleScreen} />
						<Tab.Screen name="Account" component={AccountScreen} />
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
}
