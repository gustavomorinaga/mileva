import { createElement, ReactElement } from 'react';

// --- Components ---
import HeaderComponent from '@components/Header';
import IconComponent from '@components/Icon';

const tabNavigatorConfig = {
	screenOptions: ({ route }) => ({
		tabBarShowLabel: false,
		unmountOnBlur: true,
		lazy: true,
		header: (props?: ReactElement['props']) => createElement(HeaderComponent, props),
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

			return createElement(IconComponent, iconProps);
		},
	}),
};

export default tabNavigatorConfig;
