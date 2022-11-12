import React from 'react';

// --- React Navigation ---
import { useNavigation } from '@react-navigation/native';

// --- Native-Base ---
import {
	Avatar,
	Box,
	FlatList,
	Heading,
	Popover,
	Pressable,
	Stack,
	Text,
} from 'native-base';

// --- Components ---
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';

// --- Stores ---
import useAuthStore from '@stores/auth';

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

export default function WelcomeHeaderComponent() {
	const auth = useAuthStore(state => state);

	const navigation = useNavigation<any>();

	const notificationTypes = {
		discover: 'map',
		notice: 'megaphone',
		promotion: 'pricetag',
	};

	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Stack>
				<Heading color="lightText">{`Olá, ${auth.firstName}`}</Heading>
				<Text color="lightText">Qual a próxima parada?</Text>
			</Stack>

			<Stack direction="row" space="4" alignItems="center">
				<Stack direction="row">
					<Popover
						placement="bottom"
						offset={20}
						trigger={triggerProps => (
							<IconButton
								name="notifications"
								color="lightText"
								badge={data.length}
								triggerProps={triggerProps}
							/>
						)}
					>
						<Popover.Content accessibilityLabel="Notificações">
							<Popover.Arrow />
							<Popover.CloseButton />
							<Popover.Header>Notificações</Popover.Header>
							<Popover.Body>
								<FlatList
									data={data}
									keyExtractor={item => item._id}
									renderItem={({ item }) => (
										<Box>
											<Stack direction="row" space="2">
												<Icon name={notificationTypes[item.type]} size="lg" />

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
							</Popover.Body>
						</Popover.Content>
					</Popover>
				</Stack>

				<Pressable onPress={() => navigation.navigate('Account')}>
					<Avatar source={{ uri: auth.avatar }} borderColor="white" borderWidth="2" />
				</Pressable>
			</Stack>
		</Stack>
	);
}
