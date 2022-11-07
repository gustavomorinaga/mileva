import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { TRootTabParamList } from './TRootTabParamList';

export type TSignUpProps = {
	route: RouteProp<TRootTabParamList, 'Sign Up'>;
	navigation: BottomTabNavigationProp<TRootTabParamList, 'Sign Up'>;
};
