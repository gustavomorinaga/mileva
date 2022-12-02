import create from 'zustand';

// --- Interfaces ---
import { IDestination } from '@interfaces/IDestination';

interface State {
	destinations: IDestination[];
}

const initialState: State = {
	destinations: [
		{
			_id: '1',
			name: 'Nova Iorque',
			image: {
				_id: '1',
				uri: 'https://expedicaooriente.com.br/wp-content/uploads/2019/11/nova-iorque-new-york-nova-york.jpg',
				alt: 'Nova Iorque',
			},
			reviews: 789,
			rate: 4.5,
			favorited: false,
			description:
				'A cidade de Nova York compreende 5 distritos situados no encontro do rio Hudson com o Oceano Atlântico. No centro da cidade fica Manhattan, um distrito com alta densidade demográfica que está entre os principais centros comerciais, financeiros e culturais do mundo. Entre seus pontos emblemáticos, destacam-se arranha-céus, como o Empire State Building, e o enorme Central Park. O teatro da Broadway fica em meio às luzes de neon da Times Square.',
			gallery: [
				{
					_id: '1',
					uri: 'https://www.daninoce.com.br/wp-content/uploads/2017/11/o-que-voce-precisa-saber-antes-de-ir-a-nova-york-dani-noce-imagem-destaque-960x625.jpg',
					alt: 'Nova Iorque',
				},
				{
					_id: '2',
					uri: 'https://upload.wikimedia.org/wikipedia/commons/6/61/20170721_Gotham_Shield_NYC_Aerials-225_medium.jpg',
					alt: 'Nova Iorque',
				},
			],
			geolocation: {
				latitude: 40.6971494,
				longitude: -74.1197639,
			},
		},
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
			_id: '3',
			name: 'Espanha',
			image: {
				_id: '1',
				uri: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/arquivos/imagens/espanha1.jpg',
				alt: 'Espanha',
			},
			reviews: 789,
			rate: 4.5,
			favorited: false,
			description:
				'A Espanha, país europeu da península Ibérica, tem 17 regiões autônomas com geografia e cultura diversas. Madri, a capital, abriga o Palácio Real e o Museu do Prado, obras erigidas por mestres europeus. Segóvia tem um castelo medieval (Alcázar) e um aqueduto romano intacto. A capital da Catalunha, Barcelona, apresenta monumentos modernistas de Antoni Gaudí, como a Igreja da Sagrada Família.',
			gallery: [
				{
					_id: '1',
					uri: 'https://www.remessaonline.com.br/blog/wp-content/uploads/2022/04/cidades-da-espanha-1170x752.jpg',
					alt: 'Espanha',
				},
				{
					_id: '2',
					uri: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2022/03/espanha-madri-2022-capa.jpg',
					alt: 'Espanha',
				},
			],
			geolocation: {
				latitude: 40.1301572,
				longitude: -8.2017774,
			},
		},
		{
			_id: '4',
			name: 'Argentina',
			image: {
				_id: '1',
				uri: 'https://viagemclub.com.br/wp-content/uploads/2020/06/buenos-aires-noite.jpeg',
				alt: 'Argentina',
			},
			reviews: 789,
			rate: 4.5,
			favorited: false,
			description:
				'A Argentina é um país da América do Sul com uma área extensa que abrange montanhas dos Andes, lagos glaciais e pradarias nos Pampas, ocupadas tradicionalmente por seu famoso gado. O país é conhecido também por sua dança e sua música, o tango. A capital cosmopolita, Buenos Aires, tem como centro a Praça de Maio, cercada por edifícios imponentes do século XIX, como a Casa Rosada, o emblemático palácio presidencial.',
			gallery: [
				{
					_id: '1',
					uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/64000/64898-Argentina.jpg',
					alt: 'Argentina',
				},
				{
					_id: '2',
					uri: 'https://melhoresmomentosdavida.com/wp-content/uploads/2022/04/roteiro-argentina-13-1170x730.jpg',
					alt: 'Argentina',
				},
			],
			geolocation: {
				latitude: -37.0250768,
				longitude: -81.5953574,
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
		{
			_id: '6',
			name: 'Japão',
			image: {
				_id: '1',
				uri: 'http://pm1.narvii.com/6905/601b6d1bdc01a03d24b25f9a13b72f4ad25a2b5fr1-1280-850v2_uhq.jpg',
				alt: 'Japão',
			},
			reviews: 789,
			rate: 4.5,
			favorited: false,
			description:
				'O Japão, país insular no Oceano Pacífico, tem cidades densas, palácios imperiais, parques nacionais montanhosos e milhares de santuários e templos. Os trens-bala Shinkansen conectam as principais ilhas: Kyushu (com as praias subtropicais de Okinawa), Honshu (onde ficam Tóquio e a sede do memorial da bomba atômica de Hiroshima) e Hokkaido (famosa como destino para a prática de esqui). Tóquio, a capital, é conhecida por seus arranha-céus e lojas e pela cultura pop.',
			gallery: [
				{
					_id: '1',
					uri: 'https://s2.static.brasilescola.uol.com.br/be/2021/10/vista-toquio.jpg',
					alt: 'Japão',
				},
			],
			geolocation: {
				latitude: 32.1073656,
				longitude: 118.4725626,
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
			_id: '8',
			name: 'Inglaterra',
			image: {
				_id: '1',
				uri: 'https://magazine.zarpo.com.br/wp-content/uploads/2019/02/descubra-13-imperd%C3%ADveis-pontos-tur%C3%ADsticos-de-londres.jpg',
				alt: 'Inglaterra',
			},
			reviews: 789,
			rate: 4.5,
			favorited: false,
			description:
				'A Inglaterra, local de nascimento de Shakespeare e dos Beatles, é um país nas ilhas britânicas que faz fronteira com a Escócia e o País de Gales. A capital, Londres, situada às margens do rio Tâmisa, abriga o Parlamento, o Big Ben e a Torre de Londres, do século XI. A cidade é também um moderno centro multicultural de artes e negócios. Outras grandes cidades são Manchester, Birmingham, Liverpool, Bristol e os centros universitários de Oxford e Cambridge.',
			gallery: [
				{
					_id: '1',
					uri: 'https://images.squarespace-cdn.com/content/v1/55b7e44de4b0af4724ac5dd6/1634140256034-FTQMROQVGGO1TZ5HO5D8/Inglaterra.png?format=2500w',
					alt: 'Inglaterra',
				},
			],
			geolocation: {
				latitude: 52.8203937,
				longitude: -4.5700487,
			},
		},
		{
			_id: '9',
			name: 'África do Sul',
			image: {
				_id: '1',
				uri: 'https://s204818.gridserver.com/wp-content/uploads/2018/06/Africa-do-sul-viaj-1.jpg',
				alt: 'África do Sul',
			},
			reviews: 789,
			rate: 4.5,
			favorited: false,
			description:
				'A África do Sul é um país situado na extremidade sul do continente africano e marcado por vários ecossistemas diferentes. O Parque Nacional Kruger, um destino para safári no interior do país, é repleto de animais de grande porte. A província de Cabo Ocidental tem praias, vinícolas exuberantes perto de Stellenbosch e Paarl, colinas escarpadas no Cabo da Boa Esperança, florestas e lagoas ao longo da Tuinroete (rota dos jardins) e a Cidade do Cabo, que fica ao pé da montanha da Mesa, de topo achatado.',
			gallery: [
				{
					_id: '1',
					uri: 'https://www.jafezasmalas.com/wp-content/uploads/2019/04/morar-na-africa-do-sul-ft-1.jpg',
					alt: 'África do Sul',
				},
			],
			geolocation: {
				latitude: -34.2794359,
				longitude: 18.2573285,
			},
		},
	],
};

const useDestinationsStore = create<State>((set, get) => ({
	...initialState,
}));

export default useDestinationsStore;
