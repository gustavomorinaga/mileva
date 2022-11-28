import React, { useEffect, useRef } from 'react';
import { Animated, Easing, TouchableOpacity } from 'react-native';

// --- React Navigation ---
import { NavigatorScreenParams } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import HomeStack, { THomeStackParamList } from '@navigation/HomeStack';
import FavoritesStack, { TFavoritesStackParamList } from '@navigation/FavoritesStack';
import ScheduleStack, { TScheduleStackParamList } from '@navigation/ScheduleStack';
import AccountStack, { TAccountStackParamList } from '@navigation/AccountStack';
import NotificationsStack, { TNotificationsStackParamList } from './NotificationsStack';
import AuthStack, { TAuthStackParamList } from '@navigation/AuthStack';

// --- Native-Base ---
import { Box, Center, Text } from 'native-base';

// --- Components ---
import Icon from '@components/Icon';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

// --- Stores ---
import useAuthStore from '@stores/auth';

const TABS: {
	[k: string]: {
		icon: keyof typeof Ionicons.glyphMap;
		label: string;
	};
} = {
	Home: {
		icon: 'home',
		label: 'Início',
	},
	Favorites: {
		icon: 'heart',
		label: 'Favoritos',
	},
	Schedule: {
		icon: 'briefcase',
		label: 'Agenda',
	},
	Notifications: {
		icon: 'notifications',
		label: 'Notificações',
	},
	Account: {
		icon: 'person',
		label: 'Perfil',
	},
};

export type TRootTabParamList = {
	Home: NavigatorScreenParams<THomeStackParamList>;
	Favorites: NavigatorScreenParams<TFavoritesStackParamList>;
	Schedule: NavigatorScreenParams<TScheduleStackParamList>;
	Notifications: NavigatorScreenParams<TNotificationsStackParamList>;
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
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarShowLabel: false,
				unmountOnBlur: true,
				lazy: true,
				headerShown: false,
				freezeOnBlur: true,
				tabBarButton: ({ children, accessibilityState, ...props }) => (
					<TabBarButton route={route} accessibilityState={accessibilityState} {...props}>
						{children}
					</TabBarButton>
				),
			})}
			screenListeners={({ navigation, route }) => ({
				tabPress: e => {
					e.preventDefault();

					navigation.navigate(route.name, {
						initial: true,
						screen: `${route.name} Root`,
					});
				},
			})}
		>
			{isAuthenticated ? (
				<Tab.Group>
					<Tab.Screen name="Home" component={HomeStack} />
					<Tab.Screen name="Favorites" component={FavoritesStack} />
					<Tab.Screen name="Schedule" component={ScheduleStack} />
					<Tab.Screen name="Notifications" component={NotificationsStack} />
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

function TabBarButton({ children, route, accessibilityState, ...props }) {
	const focused = accessibilityState.selected;

	const viewRef = useRef(null);
	const titleOpacityAnimation = React.useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(titleOpacityAnimation, {
			toValue: focused ? 1 : 0,
			duration: 250,
			useNativeDriver: true,
			easing: Easing.in(Easing.ease),
		}).start();
	}, [focused, titleOpacityAnimation]);

	if (['Auth'].includes(route.name)) return null;

	return (
		<Animated.View
			ref={viewRef}
			style={{
				flex: 1,
				overflow: 'hidden',
				marginTop: focused ? -10 : 0,
				paddingTop: focused ? 10 : 0,
				borderTopLeftRadius: 999,
				borderTopRightRadius: 999,
				backgroundColor: '#fff',
			}}
		>
			<TouchableOpacity activeOpacity={0.6} {...props}>
				<Box flex={1}>
					<Center flex={1}>
						<Icon
							name={TABS[route.name]?.icon || 'alert-circle'}
							color={focused ? 'darkBlue.500' : 'dark.500'}
							size="lg"
						/>
						<Animated.View
							style={{
								display: focused ? 'flex' : 'none',
								opacity: titleOpacityAnimation,
							}}
						>
							<Text fontSize={10} color="darkBlue.500">
								{TABS[route.name]?.label}
							</Text>
						</Animated.View>
					</Center>
				</Box>
			</TouchableOpacity>
		</Animated.View>
	);
}
