import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { THomeStackParamList } from './THomeStackParamList';

export type TSignInProps = {
	route: RouteProp<THomeStackParamList, 'Accommodation Details'>;
	navigation: BottomTabNavigationProp<THomeStackParamList, 'Accommodation Details'>;
};
