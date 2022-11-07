// --- React Navigation ---
import { StackNavigationOptions, TransitionPresets } from '@react-navigation/stack';
import { ParamListBase, RouteProp } from '@react-navigation/native';

const stackNavigatorConfig: {
	screenOptions?:
		| StackNavigationOptions
		| ((props: {
				route: RouteProp<ParamListBase, string>;
				navigation: any;
		  }) => StackNavigationOptions);
} = {
	screenOptions: ({ route }) => ({
		headerShown: false,
		gestureEnabled: true,
		...TransitionPresets.DefaultTransition,
	}),
};

export default stackNavigatorConfig;
