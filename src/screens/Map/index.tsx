import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Region } from 'react-native-maps';

// --- Navigation ---
import { TMapParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import { Box, StatusBar } from 'native-base';
import { LocationAccuracy } from 'expo-location';

export default function MapScreen({ navigation }: TMapParamProps) {
	const [currentRegion, setCurrentRegion] = useState<Region>(null);

	const { width, height } = Dimensions.get('screen');

	useEffect(() => {
		getCurrentLocation();
	}, []);

	const handleOnMapReady = async () => {
		const { granted } = await Location.requestForegroundPermissionsAsync();

		if (!granted)
			navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home Root');
	};

	const getCurrentLocation = async () => {
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync({ accuracy: LocationAccuracy.Highest });

		setCurrentRegion({
			latitude,
			longitude,
			latitudeDelta: 0.0922,
			longitudeDelta: 0.0421,
		});
	};

	return (
		<>
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
				animated
			/>

			<Box flex={1} safeArea>
				<MapView
					style={{ width, height }}
					loadingIndicatorColor="#0077e6"
					minZoomLevel={15}
					zoomEnabled
					showsUserLocation
					followsUserLocation
					loadingEnabled
					region={currentRegion}
					onMapReady={handleOnMapReady}
				/>
			</Box>
		</>
	);
}
