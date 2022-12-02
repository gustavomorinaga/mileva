import create from 'zustand';

// --- Interfaces ---
import { IDestination } from '@interfaces/IDestination';

interface State {
	favorites: IDestination[];

	setFavorite: (favorite: IDestination) => void;
}

const initialState = {
	favorites: [
		{
			_id: '2',
			name: 'Grécia',
			image: {
				_id: '1',
				uri: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
				alt: 'Grécia',
			},
			reviews: 789,
			rate: 4.5,
			favorited: true,
			description:
				'A Grécia é um país do sudeste da Europa com milhares de ilhas espalhadas pelos mares Egeu e Jônico. Bastante influente na antiguidade, a nação é considerada o berço da civilização ocidental. Atenas, sua capital, conserva monumentos como a Acrópole, do século V a.C., onde fica o templo Partenon. A Grécia também é conhecida por suas praias, como Santorini, com suas areias escuras, e os festivos complexos hoteleiros de Míconos.',
			gallery: [
				{
					_id: '1',
					uri: 'https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e3794a0b646d638627afb626bf9ee46f472feb1/big-0bb2a2bea537c680f141d40cb484d888.jpg',
					alt: 'Grécia',
				},
				{
					_id: '2',
					uri: 'https://cdn.cnn.com/cnnnext/dam/assets/170606121035-greece---travel-destination---shutterstock-560829934.jpg',
					alt: 'Grécia',
				},
				{
					_id: '3',
					uri: 'https://www.remessaonline.com.br/blog/wp-content/uploads/2019/11/pontos-turisticos-na-grecia-acropole-1024x680.jpeg.optimal.jpeg',
					alt: 'Grécia',
				},
				{
					_id: '4',
					uri: 'https://www.fuiserviajante.com/wp-content/uploads/2017/11/lugares-para-visitar-na-grecia-navagio-zakynthos1.jpg',
					alt: 'Grécia',
				},
			],
			geolocation: {
				latitude: 38.1288328,
				longitude: 22.238855,
			},
		},
		{
			_id: '7',
			name: 'Canadá',
			image: {
				_id: '1',
				uri: 'http://www.yazigi.com.br/galeria/repositorio/images/noticias/pontos-turisticos-canada/banff-national-park.jpg',
				alt: 'Canadá',
			},
			reviews: 789,
			rate: 4.5,
			favorited: true,
			description:
				'O Canadá é um país norte-americano que se estende desde os EUA, no sul, até o Círculo Polar Ártico, no norte. Entre suas grandes cidades estão a gigantesca Toronto; Vancouver, centro cinematográfico da costa oeste; Montreal e Québec City, que falam francês; e a capital, Ottawa. As vastas regiões de natureza selvagem do Canadá compreendem o Parque Nacional de Banff, repleto de lagos nas Montanhas Rochosas. Abriga também as Cataratas do Niágara, um famoso conjunto de enormes cachoeiras.',
			gallery: [
				{
					_id: '1',
					uri: 'https://conteudo.imguol.com.br/c/noticias/b5/2022/07/22/saskatoon-cidade-do-canada-na-provincia-de-saskatchewan-1658520781096_v2_900x506.jpg',
					alt: 'Canadá',
				},
			],
			geolocation: {
				latitude: 54.7228369,
				longitude: -113.7213326,
			},
		},
		{
			_id: '5',
			name: 'Chile',
			image: {
				_id: '1',
				uri: 'https://a.cdn-hotels.com/gdcs/production48/d1338/3cb6a4d4-c771-483c-b66b-3557af9f5e19.jpg',
				alt: 'Chile',
			},
			reviews: 789,
			rate: 4.5,
			favorited: true,
			description:
				'O Chile é um país de território comprido e estreito que se estende pelo extremo oeste da América do Sul, com mais de 6.000 km de litoral ao longo do Oceano Pacífico. Santiago, sua capital, fica localizada em um vale cercado pelos Andes e pelas montanhas da Cordilheira da Costa do Pacífico Sul. Nessa cidade, a Plaza de Armas, repleta de palmeiras, abriga a catedral neoclássica e o Museu de História Nacional. O imenso Parque Metropolitano tem piscinas, um jardim botânico e um zoológico.',
			gallery: [
				{
					_id: '1',
					uri: 'https://likechile.com/wp-content/uploads/2017/05/clima-em-Santiago-do-Chile-1.jpg',
					alt: 'Chile',
				},
			],
			geolocation: {
				latitude: -35.4130009,
				longitude: -106.2043734,
			},
		},
	],
};

const useFavoritesStore = create<State>((set, get) => ({
	...initialState,

	setFavorite: favorite => {
		const { favorites } = get();

		const favoriteIndex = get().favorites.findIndex(({ _id }) => _id === favorite._id);

		favorites[favoriteIndex] = {
			...favorites[favoriteIndex],
			favorited: !favorites[favoriteIndex].favorited,
		};

		set(() => ({ favorites }));
	},
}));

export default useFavoritesStore;
