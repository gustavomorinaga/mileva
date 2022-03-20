import React from 'react';

import AppLoading from 'expo-app-loading';

// --- Native Base ---
import { NativeBaseProvider, StatusBar } from 'native-base';

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

// --- Stores ---
import useAuthStore from './src/stores/auth';

// --- Fonts ---
import {
	Poppins_100Thin,
	Poppins_200ExtraLight,
	Poppins_300Light,
	Poppins_400Regular,
	Poppins_600SemiBold,
	Poppins_700Bold,
	useFonts,
} from '@expo-google-fonts/poppins';

// --- Styles ---
import { theme } from '@styles/theme';

const Tab = createBottomTabNavigator();

export default function App() {
	const isAuthenticated = useAuthStore(({ isAuthenticated }) => isAuthenticated);

	let [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_200ExtraLight,
		Poppins_300Light,
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	if (!fontsLoaded) return <AppLoading />;

	return (
		<NativeBaseProvider theme={theme} config={nativeBaseConfig}>
			<SafeAreaProvider>
				<StatusBar animated={true} />
				<NavigationContainer>
					<Tab.Navigator {...tabNavigatorConfig}>
						{isAuthenticated ? (
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
