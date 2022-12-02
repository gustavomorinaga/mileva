import { IGeolocation } from './IGeolocation';
import { IImage } from './IImage';

export interface IDestination {
	_id: string;
	name: string;
	image: IImage;
	reviews?: number;
	rate?: number;
	favorited?: boolean;
	description: string;
	gallery: IImage[];
	geolocation: IGeolocation;
}
