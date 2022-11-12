import React from 'react';

// --- Navigation ---
import { THomeParamProps } from '@navigation/HomeStack';

// --- Native-Base ---
import { Box, Stack, Text } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import WelcomeHeader from '@components/WelcomeHeader';
import SearchInput from '@components/SearchInput';
import CategoryButton from '@components/CategoryButton';
import Masonry from '@components/MasonryList';
import Icon from '@components/Icon';

const data = [
	{
		_id: 'id123',
		uri: 'https://expedicaooriente.com.br/wp-content/uploads/2019/11/nova-iorque-new-york-nova-york.jpg',
		alt: 'Nova Iorque',
		title: 'Nova Iorque',
		rate: 4.5,
	},
	{
		_id: 'id124',
		uri: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
		alt: 'Grécia',
		title: 'Grécia',
		rate: 4.5,
	},
	{
		_id: 'id126',
		uri: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/arquivos/imagens/espanha1.jpg',
		alt: 'Espanha',
		title: 'Espanha',
		rate: 4.5,
	},
	{
		_id: 'id127',
		uri: 'https://viagemclub.com.br/wp-content/uploads/2020/06/buenos-aires-noite.jpeg',
		alt: 'Argentina',
		title: 'Argentina',
		rate: 4.5,
	},
	{
		_id: 'id128',
		uri: 'https://a.cdn-hotels.com/gdcs/production48/d1338/3cb6a4d4-c771-483c-b66b-3557af9f5e19.jpg',
		alt: 'Chile',
		title: 'Chile',
		rate: 4.5,
	},
	{
		_id: 'id129',
		uri: 'http://pm1.narvii.com/6905/601b6d1bdc01a03d24b25f9a13b72f4ad25a2b5fr1-1280-850v2_uhq.jpg',
		alt: 'Japão',
		title: 'Japão',
		rate: 4.5,
	},
	{
		_id: 'id130',
		uri: 'http://www.yazigi.com.br/galeria/repositorio/images/noticias/pontos-turisticos-canada/banff-national-park.jpg',
		alt: 'Canadá',
		title: 'Canadá',
		rate: 4.5,
	},
	{
		_id: 'id131',
		uri: 'https://magazine.zarpo.com.br/wp-content/uploads/2019/02/descubra-13-imperd%C3%ADveis-pontos-tur%C3%ADsticos-de-londres.jpg',
		alt: 'Inglaterra',
		title: 'Inglaterra',
		rate: 4.5,
	},
	{
		_id: 'id132',
		uri: 'https://s204818.gridserver.com/wp-content/uploads/2018/06/Africa-do-sul-viaj-1.jpg',
		alt: 'África do Sul',
		title: 'África do Sul',
		rate: 4.5,
	},
];

export default function HomeScreen({ navigation }: THomeParamProps) {
	const locationItem = ({ item }) => {
		return (
			<Box
				position="absolute"
				left="0"
				bottom="0"
				m="2"
				p="2"
				borderRadius="lg"
				bgColor="black:alpha.80"
			>
				<Text color="lightText">{item.title}</Text>
				<Stack direction="row" space="1">
					<Icon name="star" color="amber.400" />
					<Text color="lightText">{item.rate}</Text>
				</Stack>
			</Box>
		);
	};

	return (
		<>
			<Header>
				<WelcomeHeader />
			</Header>

			<BaseScreen mt={-12} scrollEnabled={false}>
				<SearchInput placeholder="Pesquisar um destino..." mb="4" />

				<Stack direction="row" space="2" justifyContent="space-between">
					<CategoryButton
						boxProps={{ bgColor: 'red.200' }}
						iconProps={{ name: 'business', styles: { color: 'red.500' } }}
						labelProps={{ label: 'Hotéis' }}
						onPress={() => navigation.navigate('Hotels')}
					/>
					<CategoryButton
						boxProps={{ bgColor: 'darkBlue.200' }}
						iconProps={{ name: 'airplane', styles: { color: 'darkBlue.500' } }}
						labelProps={{ label: 'Passagens' }}
						onPress={() => navigation.navigate('Passages')}
					/>
					<CategoryButton
						boxProps={{ bgColor: 'amber.200' }}
						iconProps={{ name: 'cube', styles: { color: 'amber.500' } }}
						labelProps={{ label: 'Pacotes' }}
						onPress={() => navigation.navigate('Packages')}
					/>
				</Stack>

				<Masonry
					numColumns={2}
					data={data}
					renderChild={locationItem}
					containerProps={{
						shadow: '1',
					}}
					onPress={() => navigation.navigate('Accommodation')}
				/>
			</BaseScreen>
		</>
	);
}
