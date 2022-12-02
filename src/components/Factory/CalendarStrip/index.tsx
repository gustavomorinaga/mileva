import React from 'react';

// --- Native-Base ---
import { Box, Factory, IBoxProps } from 'native-base';

// --- Calendars ---
import CalendarStrip, { CalendarStripProps } from 'react-native-calendar-strip';

// --- Configs ---
import { dateLocaleConfig } from '@configs/dateLocaleConfig';

const [primaryColor, lightPrimaryColor, blackColor, grayColor] = [
	'#0077e6',
	'#1a91ff',
	'#000000',
	'#a1a1aa',
];

interface IFactoryCalendarProps extends Omit<CalendarStripProps, 'style'> {
	children?: React.ReactElement;
	containerProps?: IBoxProps;
}

export default function FactoryCalendarStrip({
	containerProps,
	...calendarProps
}: IFactoryCalendarProps) {
	const FCalendarStrip = Factory(CalendarStrip);

	return (
		<Box position="relative" minH="16" overflow="hidden" {...containerProps}>
			<FCalendarStrip
				scrollable
				style={{ flex: 1, margin: 0, padding: 0 }}
				calendarColor="#ffffff"
				calendarHeaderStyle={{ color: blackColor, fontFamily: 'Poppins_600SemiBold' }}
				dateNumberStyle={{ color: blackColor, fontFamily: 'Poppins_600SemiBold' }}
				dateNameStyle={{ color: grayColor, fontFamily: 'Poppins_400Regular' }}
				highlightDateNameStyle={{ color: lightPrimaryColor }}
				highlightDateNumberStyle={{ color: primaryColor }}
				iconContainer={{ flex: 0.05 }}
				locale={dateLocaleConfig}
				{...calendarProps}
			/>
		</Box>
	);
}
