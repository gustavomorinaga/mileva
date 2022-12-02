import { IGeolocation } from './IGeolocation';
import { IImage } from './IImage';

export interface IHotel {
	_id: string;
	image: IImage;
	title: string;
	description?: string;
	location: string;
	proximity?: number;
	rate?: number;
	reviews?: number;
	price: number;
	services?: string[];
	gallery?: IImage[];
	geolocation: IGeolocation;
}
