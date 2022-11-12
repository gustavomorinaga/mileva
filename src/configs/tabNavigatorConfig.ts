import { createElement } from 'react';
import { TouchableOpacity } from 'react-native';

// --- React Navigation ---
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

// --- Components ---
import Icon from '@components/Icon';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

const TABS_ICONS: {
	[k: string]: keyof typeof Ionicons.glyphMap;
} = {
	Home: 'home',
	Favorites: 'heart',
	Schedule: 'briefcase',
	Account: 'person',
};

const tabNavigatorConfig: {
	screenOptions?:
		| BottomTabNavigationOptions
		| ((props: {
				route: RouteProp<ParamListBase, string>;
				navigation: any;
		  }) => BottomTabNavigationOptions);
} = {
	screenOptions: ({ route }) => ({
		tabBarShowLabel: false,
		unmountOnBlur: true,
		lazy: true,
		headerShown: false,
		freezeOnBlur: true,
		tabBarIcon: ({ focused, size }) =>
			createElement(Icon, {
				name: TABS_ICONS[route.name] || 'alert-circle',
				color: focused ? 'darkBlue.500' : 'dark.500',
				size,
			}),
		tabBarButton: props =>
			createElement(TouchableOpacity, { activeOpacity: 0.6, ...props }),
	}),
};

export default tabNavigatorConfig;
