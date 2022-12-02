import create from 'zustand';

// --- Interfaces ---
import { IHotel } from '@interfaces/IHotel';

interface State {
	hotels: IHotel[];
}

const initialState = {
	hotels: [
		{
			_id: '1',
			image: {
				_id: '1',
				uri: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/partnerimages/30/97/309756028.jpeg',
				alt: 'Sofitel Athens Airport Hotel',
			},
			title: 'Sofitel Athens Airport Hotel',
			location: 'Spata',
			proximity: null,
			rate: 4.8,
			reviews: 3241,
			price: 944,
			services: ['wifi', 'transport', 'coffee', 'spa'],
			gallery: [
				{
					_id: '1',
					uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_r_021.jpg',
					alt: 'Grécia',
				},
				{
					_id: '2',
					uri: 'https://cdn.worldota.net/t/1024x768/content/ff/83/ff83ba69bfa233efb45c11d4b12db43aea09b6ea.jpeg',
					alt: 'Grécia',
				},
				{
					_id: '3',
					uri: 'https://images.trvl-media.com/hotels/1000000/690000/688200/688125/8d9a53dd_z.jpg',
					alt: 'Grécia',
				},
				{
					_id: '4',
					uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_ro_038.jpg',
					alt: 'Grécia',
				},
				{
					_id: '5',
					uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_ro_012.jpg',
					alt: 'Grécia',
				},
			],
			geolocation: {
				latitude: 37.936796,
				longitude: 23.9436213,
			},
		},
		{
			_id: '2',
			image: {
				_id: '1',
				uri: 'https://www.cntravellerme.com/2021/08/01_16_Katikies-Luxury-Hotel-Santorini-1-scaled.jpg',
				alt: 'Katikies Santorini',
			},
			title: 'Katikies Santorini',
			location: 'Nik. Nomikou (Main Street) - Oía',
			proximity: null,
			rate: 4.7,
			reviews: 295,
			price: 2784,
			gallery: [
				{
					_id: '1',
					uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_r_021.jpg',
					alt: 'Grécia',
				},
				{
					_id: '2',
					uri: 'https://cdn.worldota.net/t/1024x768/content/ff/83/ff83ba69bfa233efb45c11d4b12db43aea09b6ea.jpeg',
					alt: 'Grécia',
				},
				{
					_id: '3',
					uri: 'https://images.trvl-media.com/hotels/1000000/690000/688200/688125/8d9a53dd_z.jpg',
					alt: 'Grécia',
				},
				{
					_id: '4',
					uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_ro_038.jpg',
					alt: 'Grécia',
				},
				{
					_id: '5',
					uri: 'https://photos.hotelbeds.com/giata/original/00/007053/007053a_hb_ro_012.jpg',
					alt: 'Grécia',
				},
			],
			geolocation: {
				latitude: 36.461973,
				longitude: 25.382531,
			},
		},
		{
			_id: '3',
			image: {
				_id: '1',
				uri: 'https://photos.hotelbeds.com/giata/original/09/092652/092652a_hb_p_032.jpg',
				alt: 'Athina Luxury Suites',
			},
			title: 'Athina Luxury Suites',
			location: 'Fira - Thira',
			proximity: null,
			rate: 4.7,
			reviews: 2054,
			price: 773,
			geolocation: {
				latitude: 36.4168617,
				longitude: 25.4288128,
			},
		},
	],
};

const useHotelsStore = create<State>((set, get) => ({
	...initialState,
}));

export default useHotelsStore;
