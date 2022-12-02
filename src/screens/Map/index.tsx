import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Region } from 'react-native-maps';

// --- Navigation ---
import { TMapParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import { Box, Stack, StatusBar } from 'native-base';
import { LocationAccuracy } from 'expo-location';

// --- Components ---
import Header from '@components/Header';
import IconButton from '@components/IconButton';

const precisionDeltas = { latitudeDelta: 0.0922, longitudeDelta: 0.0421 };

export default function MapScreen({ navigation, route: { params } }: TMapParamProps) {
	const [currentRegion, setCurrentRegion] = useState<Region>(null);
	const [userRegion, setUserRegion] = useState<Region>(null);

	const { width, height } = Dimensions.get('screen');

	const handleOnMapReady = async () => {
		const { granted } = await Location.requestForegroundPermissionsAsync();

		if (!granted)
			navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Home Root');
	};

	const getCurrentLocation = useCallback(async () => {
		const {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync({ accuracy: LocationAccuracy.Highest });

		setUserRegion({
			latitude,
			longitude,
			...precisionDeltas,
		});

		setCurrentRegion({
			...(params?.geolocation
				? { ...params?.geolocation, ...precisionDeltas }
				: userRegion),
		});
	}, [params?.geolocation, userRegion]);

	useEffect(() => {
		getCurrentLocation();
	}, [getCurrentLocation]);

	return (
		<Box position="relative">
			<StatusBar
				barStyle="dark-content"
				backgroundColor="transparent"
				translucent
				animated
			/>

			<Header
				containerStyle={{ position: 'absolute', zIndex: 999, bgColor: 'transparent' }}
			>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						name="arrow-back"
						bgColor="white"
						shadow="5"
						onPress={() => navigation.goBack()}
					/>
				</Stack>
			</Header>

			<Box flex={1} safeArea>
				<MapView
					style={{ width, height }}
					loadingIndicatorColor="#0077e6"
					maxZoomLevel={20}
					minZoomLevel={params?.zoomLevel || 15}
					zoomEnabled
					showsUserLocation
					followsUserLocation
					loadingEnabled
					region={currentRegion}
					showsCompass={false}
					showsMyLocationButton={false}
					onMapReady={handleOnMapReady}
				/>
			</Box>
		</Box>
	);
}
