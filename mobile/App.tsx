import React from 'react';

// --- Native Base ---
import { NativeBaseProvider } from 'native-base';

// --- React Navigation ---
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// --- Screens ---
import SignInScreen from '@screens/SignIn';
import SignUpScreen from '@screens/SignUp';
import HomeScreen from '@screens/Home';
import FavoritesScreen from '@screens/Favorites';
import ScheduleScreen from '@screens/Schedule';
import AccountScreen from '@screens/Profile';

// --- Configs ---
import nativeBaseConfig from '@configs/nativeBaseConfig';
import tabNavigatorConfig from '@configs/tabNavigatorConfig';
import signScreensConfig from '@configs/signScreensConfig';

const Tab = createBottomTabNavigator();

const isUserLogged = false;

export default function App() {
	return (
		<NativeBaseProvider config={nativeBaseConfig}>
			<SafeAreaProvider>
				<NavigationContainer>
					<Tab.Navigator {...tabNavigatorConfig}>
						{isUserLogged ? (
							<>
								<Tab.Screen name="Home" component={HomeScreen} />
								<Tab.Screen name="Favorites" component={FavoritesScreen} />
								<Tab.Screen name="Schedule" component={ScheduleScreen} />
								<Tab.Screen name="Account" component={AccountScreen} />
							</>
						) : (
							<>
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
								<Tab.Screen name="Home" component={HomeScreen} />
							</>
						)}
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
}
