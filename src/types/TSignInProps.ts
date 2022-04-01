import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { TRootStackParamList } from './TRootStackParamList';

export type TSignInProps = {
	route: RouteProp<TRootStackParamList, 'Sign In'>;
	navigation: BottomTabNavigationProp<TRootStackParamList, 'Sign In'>;
};
