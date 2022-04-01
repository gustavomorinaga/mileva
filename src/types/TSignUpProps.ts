import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { TRootStackParamList } from './TRootStackParamList';

export type TSignUpProps = {
	route: RouteProp<TRootStackParamList, 'Sign Up'>;
	navigation: BottomTabNavigationProp<TRootStackParamList, 'Sign Up'>;
};
