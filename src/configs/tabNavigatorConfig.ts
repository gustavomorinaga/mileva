import { createElement } from 'react';
import { TouchableOpacity } from 'react-native';

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

const tabNavigatorConfig = {
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
	screenListeners: ({ navigation, route }) => ({
		tabPress: e => {
			e.preventDefault();

			navigation.navigate(route.name);
		},
	}),
};

export default tabNavigatorConfig;
