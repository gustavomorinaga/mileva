import React from 'react';

// --- Navigation ---
import { TNotificationsParamProps } from '@navigation/NotificationsStack';

// --- Native-Base ---
import { Box, FlatList, Heading, Stack, Text, View } from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';

const data = [
	{
		_id: '1',
		type: 'discover',
		title: 'Há uma promoção de viagem te esperando!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis autem delectus minima excepturi, in, qui deleniti provident ab harum sapiente unde. Minus modi ratione error accusantium natus, deleniti dolores.',
		date: '2022-11-09T14:26:19.067Z',
	},
	{
		_id: '2',
		type: 'notice',
		title: 'Há uma promoção de viagem te esperando!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis autem delectus minima excepturi, in, qui deleniti provident ab harum sapiente unde. Minus modi ratione error accusantium natus, deleniti dolores.',
		date: '2022-11-09T14:26:19.067Z',
	},
	{
		_id: '3',
		type: 'promotion',
		title: 'Há uma promoção de viagem te esperando!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis autem delectus minima excepturi, in, qui deleniti provident ab harum sapiente unde. Minus modi ratione error accusantium natus, deleniti dolores.',
		date: '2022-11-09T14:26:19.067Z',
	},
];

const NOTIFICATION_TYPES = {
	discover: 'map',
	notice: 'megaphone',
	promotion: 'pricetag',
};

export default function NotificationsScreen({ navigation }: TNotificationsParamProps) {
	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						name="arrow-back"
						bgColor="white"
						onPress={() => navigation.goBack()}
					/>

					<Heading textAlign="center" color="white">
						Notificações
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<FlatList
					data={data}
					keyExtractor={item => item._id}
					renderItem={({ item }) => (
						<Box>
							<Stack direction="row" space="2">
								<Icon name={NOTIFICATION_TYPES[item.type]} size="lg" />

								<Stack>
									<Heading fontSize="md">{item.title}</Heading>
									<Text noOfLines={2} isTruncated>
										{item.description}
									</Text>
								</Stack>
							</Stack>
						</Box>
					)}
				/>
			</BaseScreen>
		</>
	);
}
