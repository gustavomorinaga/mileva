import React from 'react';

// --- Native-Base ---
import { Box, Flex, Stack, Text } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import WelcomeHeader from '@components/WelcomeHeader';
import SearchInput from '@components/SearchInput';
import CategoryButton from '@components/CategoryButton';
import Masonry from '@components/MasonryList';
import Icon from '@components/Icon';

// --- Types ---
import { THomeRootProps } from '@~types/THomeRootProps';

const data = [
	{
		_id: 'id123',
		uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
		alt: 'Pioneer LHS Chaise Lounger in Grey Colour',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id124',
		uri: 'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
		alt: 'Precedant Furniture',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id125',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
		alt: 'Leverette Upholstered Platform Bed',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id126',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
		alt: 'Briget Accent Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id127',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Rivet Emerly Media Console',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id128',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Drew Barrymore Flower Home Accent Chair',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id129',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Ecobirdy Charlie Chair',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id130',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
		alt: 'Hailey Sofa',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id131',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
		alt: 'Farmhouse Dining Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id132',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Evelyn Coffee Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id133',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Slope Nomad Leather Sofa',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id134',
		uri: 'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
		alt: 'Chair and Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id223',
		uri: 'https://ii1.pepperfry.com/media/catalog/product/m/o/568x625/modern-chaise-lounger-in-grey-colour-by-dreamzz-furniture-modern-chaise-lounger-in-grey-colour-by-dr-tmnirx.jpg',
		alt: 'Pioneer LHS Chaise Lounger in Grey Colour',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id224',
		uri: 'https://www.precedent-furniture.com/sites/precedent-furniture.com/files/styles/header_slideshow/public/3360_SL%20CR.jpg?itok=3Ltk6red',
		alt: 'Precedant Furniture',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id225',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/leverette-fabric-queen-upholstered-platform-bed-1594829293.jpg',
		alt: 'Leverette Upholstered Platform Bed',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id226',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/briget-side-table-1582143245.jpg?crop=1.00xw:0.770xh;0,0.129xh&resize=768:*',
		alt: 'Briget Accent Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id227',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rivet-emerly-media-console-1610578756.jpg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Rivet Emerly Media Console',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id228',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/drew-barrymore-flower-home-petal-chair-1594829759.jpeg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Drew Barrymore Flower Home Accent Chair',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id229',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/goodee-ecobirdy-charlie-chairs-1594834221.jpg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Ecobirdy Charlie Chair',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id230',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hailey-sofa-1571430947.jpg?crop=0.481xw:0.722xh;0.252xw,0.173xh&resize=768:*',
		alt: 'Hailey Sofa',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id231',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/archer-home-designs-dining-table-1594830125.jpg?crop=0.657xw:1.00xh;0.0986xw,0&resize=768:*',
		alt: 'Farmhouse Dining Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id232',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/evelyn-coffee-table-1610578857.jpeg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Evelyn Coffee Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id233',
		uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrow-nomad-sofa-1594837995.jpg?crop=1xw:1xh;center,top&resize=768:*',
		alt: 'Slope Nomad Leather Sofa',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
	{
		_id: 'id234',
		uri: 'https://apicms.thestar.com.my/uploads/images/2020/02/21/570850.jpg',
		alt: 'Chair and Table',
		title: 'Lorem, ipsum dolor',
		rate: 4.5,
	},
];

export default function HomeScreen(props: THomeRootProps) {
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

			<BaseScreen mt={-12}>
				<SearchInput placeholder="Pesquisar um destino..." />

				<Flex direction="row" justify="space-between" mt="4">
					<CategoryButton
						boxProps={{ bgColor: 'red.200' }}
						iconProps={{ name: 'business', styles: { color: 'red.500' } }}
						labelProps={{ label: 'Hotéis' }}
					/>
					<CategoryButton
						boxProps={{ bgColor: 'darkBlue.200' }}
						iconProps={{ name: 'airplane', styles: { color: 'darkBlue.500' } }}
						labelProps={{ label: 'Passagens' }}
					/>
					<CategoryButton
						boxProps={{ bgColor: 'amber.200' }}
						iconProps={{ name: 'cube', styles: { color: 'amber.500' } }}
						labelProps={{ label: 'Pacotes' }}
					/>
				</Flex>

				<Masonry
					numColumns={2}
					data={data}
					screen={{ name: 'Accommodation Details' }}
					renderChild={locationItem}
				/>
			</BaseScreen>
		</>
	);
}
