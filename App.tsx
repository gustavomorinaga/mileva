import React, { useCallback, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// --- Splash Loading ---
import * as SplashScreen from 'expo-splash-screen';

// --- Native Base ---
import { NativeBaseProvider, StatusBar } from 'native-base';

// --- React Navigation ---
import { NavigationContainer } from '@react-navigation/native';

// --- Configs ---
import nativeBaseConfig from '@configs/nativeBaseConfig';

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

import TabNavigator from '@navigation/TabNavigator';

// --- Disable NativeBase Logs ---
LogBox.ignoreLogs(['NativeBase:']);

SplashScreen.preventAutoHideAsync();

export default function App() {
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
			<StatusBar animated={true} />
			<SafeAreaProvider onLayout={onLayoutRootView}>
				<NavigationContainer>
					<TabNavigator />
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
}
