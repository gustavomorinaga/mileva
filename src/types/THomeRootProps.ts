import { RouteProp } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { THomeStackParamList } from './THomeStackParamList';

export type THomeRootProps = {
	route: RouteProp<THomeStackParamList, 'Home Root'>;
	navigation: BottomTabNavigationProp<THomeStackParamList, 'Home Root'>;
};
