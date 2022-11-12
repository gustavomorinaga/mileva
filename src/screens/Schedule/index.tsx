import React from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { TScheduleParamProps } from '@navigation/ScheduleStack';

// --- Native-Base ---
import {
	AspectRatio,
	Box,
	FlatList,
	Heading,
	Image,
	Stack,
	Text,
	View,
	ZStack,
} from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';
import Card from '@components/Card';
import FactoryCalendar from '@components/Factory/Calendar';

// --- Date-FNS ---
import { format, formatISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const data = [
	{
		_id: '1',
		accommodation: 'Nova Iorque',
		image: {
			uri: 'https://expedicaooriente.com.br/wp-content/uploads/2019/11/nova-iorque-new-york-nova-york.jpg',
			alt: 'Nova Iorque',
		},
		startDate: formatISO(new Date('2022-10-27T15:25:00')),
		endDate: formatISO(new Date('2022-11-04T20:30:00')),
	},
	{
		_id: '2',
		accommodation: 'Grécia',
		image: {
			uri: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
			alt: 'Grécia',
		},
		startDate: formatISO(new Date('2022-05-14T10:00:00')),
		endDate: formatISO(new Date('2022-07-04T16:17:00')),
	},
	{
		_id: '3',
		accommodation: 'Espanha',
		image: {
			uri: 'https://www.gov.br/mre/pt-br/assuntos/portal-consular/arquivos/imagens/espanha1.jpg',
			alt: 'Espanha',
		},
		startDate: formatISO(new Date('2022-01-03T16:25:00')),
		endDate: formatISO(new Date('2022-01-14T17:10:00')),
	},
];

export default function ScheduleScreen({ navigation }: TScheduleParamProps) {
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
						Agenda
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<Stack flex={1} space="6">
					<FactoryCalendar />

					<Heading fontSize="xl">Minhas viagens</Heading>

					<SafeAreaView style={{ flex: 1, marginTop: -8, marginHorizontal: -20 }}>
						<ZStack zIndex={99}>
							<Box
								bg={{
									linearGradient: {
										colors: ['transparent', 'muted.100'],
										start: [0, 0.75],
										end: [0, 0],
									},
								}}
								w="full"
								h="8"
							/>
						</ZStack>
						<FlatList
							data={data}
							keyExtractor={item => item._id}
							showsVerticalScrollIndicator={false}
							renderItem={({ item }) => (
								<Card containerProps={{ mx: 5, mb: 5 }}>
									<Card.Content>
										<Card.Body>
											<Stack direction="row" space="4">
												<AspectRatio
													ratio={{ base: 1 / 1 }}
													overflow="hidden"
													rounded="xl"
													w="16"
													h="16"
												>
													<Image source={{ uri: item.image.uri }} alt={item.image.alt} />
												</AspectRatio>

												<Stack>
													<Heading fontSize="lg">{item.accommodation}</Heading>

													<Stack direction="row" space="1" alignItems="baseline">
														<Icon name="calendar" />
														<Text>
															{format(new Date(item.startDate), 'PP', { locale: ptBR })}
															{' - '}
															{format(new Date(item.endDate), 'PP', { locale: ptBR })}
														</Text>
													</Stack>
												</Stack>
											</Stack>
										</Card.Body>
									</Card.Content>
								</Card>
							)}
							contentContainerStyle={{
								marginTop: -4,
								paddingTop: 4,
								paddingBottom: 10,
							}}
							pt="4"
						/>
					</SafeAreaView>
				</Stack>
			</BaseScreen>
		</>
	);
}
