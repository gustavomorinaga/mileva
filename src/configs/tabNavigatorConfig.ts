import { createElement } from 'react';

// --- React Navigation ---
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import Icon from '@components/Icon';

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
		tabBarIcon: ({ focused, size }) => {
			const iconProps = {
				name: 'alert-circle',
				size,
				color: focused ? 'darkBlue.500' : 'dark.500',
			};

			switch (route.name) {
				case 'Home':
					iconProps.name = 'home';
					break;
				case 'Favorites':
					iconProps.name = 'heart';
					break;
				case 'Schedule':
					iconProps.name = 'briefcase';
					break;
				case 'Account':
					iconProps.name = 'person';
					break;
				default:
					break;
			}

			return createElement(Icon, iconProps);
		},
	}),
};

export default tabNavigatorConfig;
