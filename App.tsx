import React, { useCallback, useEffect } from 'react';

// --- Splash Loading ---
import * as SplashScreen from 'expo-splash-screen';

// --- Native Base ---
import { NativeBaseProvider, StatusBar } from 'native-base';

// --- React Navigation ---
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// --- Screens ---
import SignInScreen from '@screens/SignIn';
import SignUpScreen from '@screens/SignUp';
import HomeScreen from '@screens/Home';
import AccommodationDetailsScreen from '@screens/AccommodationDetails';
import FavoritesScreen from '@screens/Favorites';
import ScheduleScreen from '@screens/Schedule';
import AccountScreen from '@screens/Profile';

// --- Configs ---
import nativeBaseConfig from '@configs/nativeBaseConfig';
import stackNavigatorConfig from '@configs/stackNavigatorConfig';
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
import { LogBox } from 'react-native';

// --- Types ---
import { TRootTabParamList } from '@~types/TRootTabParamList';
import { THomeStackParamList } from '@~types/THomeStackParamList';

// --- Disable NativeBase Logs ---
LogBox.ignoreLogs(['NativeBase:']);

const RootTab = createBottomTabNavigator<TRootTabParamList>();
const HomeStack = createStackNavigator<THomeStackParamList>();

SplashScreen.preventAutoHideAsync();

function HomeTabs() {
	return (
		<HomeStack.Navigator initialRouteName="Home Root" {...stackNavigatorConfig}>
			<HomeStack.Screen name="Home Root" component={HomeScreen} />
			<HomeStack.Screen
				name="Accommodation Details"
				component={AccommodationDetailsScreen}
			/>
		</HomeStack.Navigator>
	);
}

export default function App() {
	const isAuthenticated = useAuthStore(({ isAuthenticated }) => isAuthenticated);

	const [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_200ExtraLight,
		Poppins_300Light,
		Poppins_400Regular,
		Poppins_600SemiBold,
		Poppins_700Bold,
	});

	useEffect(() => {
		(async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		})();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) await SplashScreen.hideAsync();
	}, [fontsLoaded]);

	if (!fontsLoaded) return null;

	return (
		<NativeBaseProvider theme={theme} config={nativeBaseConfig}>
			<SafeAreaProvider onLayout={onLayoutRootView}>
				<StatusBar animated={true} />
				<NavigationContainer>
					<RootTab.Navigator {...tabNavigatorConfig}>
						{isAuthenticated ? (
							<RootTab.Group>
								<RootTab.Screen name="Home" component={HomeTabs} />
								<RootTab.Screen name="Favorites" component={FavoritesScreen} />
								<RootTab.Screen name="Schedule" component={ScheduleScreen} />
								<RootTab.Screen name="Account" component={AccountScreen} />
							</RootTab.Group>
						) : (
							<RootTab.Group>
								<RootTab.Screen
									name="Sign In"
									component={SignInScreen}
									options={signScreensConfig}
								/>
								<RootTab.Screen
									name="Sign Up"
									component={SignUpScreen}
									options={signScreensConfig}
								/>
							</RootTab.Group>
						)}
					</RootTab.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
}
