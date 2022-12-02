import { Region } from 'react-native-maps';

export interface IGeolocation extends Omit<Region, 'latitudeDelta' | 'longitudeDelta'> {}
