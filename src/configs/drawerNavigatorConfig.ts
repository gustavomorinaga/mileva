// --- React Navigation ---
import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const drawerNavigatorConfig: {
	screenOptions?:
		| DrawerNavigationOptions
		| ((props: {
				route: RouteProp<ParamListBase, string>;
				navigation: any;
		  }) => DrawerNavigationOptions);
} = {
	screenOptions: ({ route }) => ({
		headerShown: false,
	}),
};

export default drawerNavigatorConfig;
