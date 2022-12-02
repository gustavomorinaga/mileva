import React from 'react';

// --- Navigation ---
import { TTravelPLanParamProps } from '@navigation/ScheduleStack';

// --- Native-Base ---
import {
	Box,
	Divider,
	FlatList,
	Heading,
	Image,
	Pressable,
	Stack,
	Text,
	View,
} from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';

// --- Calendars ---
import FactoryCalendarStrip from '@components/Factory/CalendarStrip';

// --- Utils ---
import { getRealDate } from '@utils/realDate';

const primaryColor = '#0077e6';

export default function TravelPlanScreen({
	navigation,
	route: { params },
}: TTravelPLanParamProps) {
	return (
		<>
			<Header containerStyle={{ zIndex: 99, pb: '6' }}>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						name="arrow-back"
						bgColor="white"
						onPress={() => navigation.goBack()}
					/>

					<Heading textAlign="center" color="white">
						Plano de Viagem
					</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen isAnimated={false} mt={-6}>
				<FactoryCalendarStrip
					containerProps={{
						zIndex: 9,
						minH: 20,
						mt: -5,
						mx: -5,
						pt: 5,
						px: 5,
						bgColor: 'white',
						borderBottomWidth: '1',
						borderColor: 'warmGray.300',
					}}
					calendarHeaderStyle={{ display: 'none' }}
					selectedDate={getRealDate(new Date(params.selectedDate))}
					markedDates={params.markedDates.map(markedDate => ({
						date: markedDate,
						lines: [{ color: primaryColor }],
					}))}
				/>
			</BaseScreen>
		</>
	);
}
