import { createElement } from 'react-native';

// --- Native-Base ---
import { Icon } from 'native-base';

// --- Components ---
import HeaderComponent from '@components/Header';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

const tabNavigatorConfig = {
	screenOptions: ({ route }) => ({
		tabBarShowLabel: false,
		unmountOnBlur: true,
		lazy: true,
		header: (props?: any) => createElement(HeaderComponent, props),
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
	}),
};

export default tabNavigatorConfig;
