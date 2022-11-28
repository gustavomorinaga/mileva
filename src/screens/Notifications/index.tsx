import React, { useCallback } from 'react';

// --- Navigation ---
import { TNotificationsParamProps } from '@navigation/NotificationsStack';

// --- Native-Base ---
import {
	Box,
	Divider,
	FlatList,
	Heading,
	Pressable,
	Stack,
	Text,
	ZStack,
} from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

// --- Date-FNS ---
import { formatDistanceToNowStrict } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const data = [
	{
		_id: '1',
		type: 'discover',
		title: 'Que tal organizar as suas férias?',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
	{
		_id: '4',
		type: 'discover',
		title: 'Há uma promoção de viagem te esperando!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis autem delectus minima excepturi, in, qui deleniti provident ab harum sapiente unde. Minus modi ratione error accusantium natus, deleniti dolores.',
		date: '2022-11-09T14:26:19.067Z',
	},
	{
		_id: '5',
		type: 'notice',
		title: 'Há uma promoção de viagem te esperando!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis autem delectus minima excepturi, in, qui deleniti provident ab harum sapiente unde. Minus modi ratione error accusantium natus, deleniti dolores.',
		date: '2022-11-09T14:26:19.067Z',
	},
	{
		_id: '6',
		type: 'promotion',
		title: 'Há uma promoção de viagem te esperando!',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. At blanditiis autem delectus minima excepturi, in, qui deleniti provident ab harum sapiente unde. Minus modi ratione error accusantium natus, deleniti dolores.',
		date: '2022-11-09T14:26:19.067Z',
	},
];

const NOTIFICATION_TYPES: {
	[k: string]: {
		icon: keyof typeof Ionicons.glyphMap;
		color: ColorType;
		bgColor: ColorType;
	};
} = {
	discover: {
		icon: 'map',
		color: 'darkBlue.500',
		bgColor: 'darkBlue.200',
	},
	notice: {
		icon: 'megaphone',
		color: 'warning.500',
		bgColor: 'warning.200',
	},
	promotion: {
		icon: 'pricetag',
		color: 'red.500',
		bgColor: 'red.200',
	},
};

export default function NotificationsScreen({ navigation }: TNotificationsParamProps) {
	const handleNotificationPress = useCallback(() => {
		navigation.navigate('Schedule');
	}, [navigation]);

	return (
		<>
			<Header>
				<Stack direction="row" alignItems="center" justifyContent="center">
					<Heading textAlign="center" color="white">
						Notificações
					</Heading>
				</Stack>
			</Header>

			<BaseScreen mt={-16}>
				<Box flex={1} mt={-5} mx={-5}>
					<ZStack zIndex={99}>
						<Box
							bg={{
								linearGradient: {
									colors: ['transparent', 'darkBlue.500'],
									start: [0, 0.75],
									end: [0, 0],
								},
							}}
							w="full"
							h="8"
						/>
					</ZStack>
					<FlatList
						contentContainerStyle={{
							marginTop: -4,
							paddingTop: 24,
							paddingBottom: 10,
							paddingHorizontal: 20,
						}}
						data={data}
						keyExtractor={item => item._id}
						showsVerticalScrollIndicator={false}
						renderItem={({ item, index }) => (
							<Stack
								position="relative"
								overflow="hidden"
								bgColor="white"
								shadow="5"
								{...(index === 0 && {
									borderTopLeftRadius: '2xl',
									borderTopRightRadius: '2xl',
								})}
								{...(index === data.length - 1 && {
									borderBottomLeftRadius: '2xl',
									borderBottomRightRadius: '2xl',
								})}
							>
								<Pressable onPress={handleNotificationPress}>
									<Box p="4">
										<Stack direction="row" space="4">
											<Stack space="1">
												<Box
													alignSelf="flex-start"
													overflow="hidden"
													rounded="xl"
													p="2"
													bgColor={NOTIFICATION_TYPES[item.type].bgColor}
												>
													<Icon
														name={NOTIFICATION_TYPES[item.type].icon}
														color={NOTIFICATION_TYPES[item.type].color}
														size="lg"
													/>
												</Box>

												<Text fontSize="xs" color="gray.400">
													{formatDistanceToNowStrict(new Date(item.date), {
														locale: ptBR,
													})}
												</Text>
											</Stack>

											<Stack mr="8">
												<Heading fontSize="sm" noOfLines={2} isTruncated>
													{item.title}
												</Heading>

												<Text mr="4" noOfLines={2} isTruncated>
													{item.description}
												</Text>
											</Stack>
										</Stack>
									</Box>
								</Pressable>

								<Divider />
							</Stack>
						)}
					/>
				</Box>
			</BaseScreen>
		</>
	);
}
