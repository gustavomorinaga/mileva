import { createElement } from 'react';

import { Icon } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

const tabNavigatorConfig = {
	screenOptions: ({ route }) => ({
		tabBarIcon: ({ focused, size }) => {
			const iconProps = {
				as: Ionicons,
				name: '',
				size,
				color: focused ? 'darkBlue.500' : 'dark.500',
			};

			switch (route.name) {
				case 'Login':
					iconProps.name = 'enter';
					break;
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
					iconProps.name = 'alert-circle';
					break;
			}

			return createElement(Icon, iconProps);
		},
		headerShown: false,
		tabBarShowLabel: false,
		unmountOnBlur: true,
		lazy: true,
	}),
};

export default tabNavigatorConfig;
