import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { TRootTabParamList } from './TRootTabParamList';

export type TSignInProps = {
	route: RouteProp<TRootTabParamList, 'Sign In'>;
	navigation: BottomTabNavigationProp<TRootTabParamList, 'Sign In'>;
};
