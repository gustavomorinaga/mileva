import React from 'react';

// --- Native-Base ---
import { Box, Factory, IBoxProps } from 'native-base';

// --- Calendars ---
import { Calendar, CalendarProps, LocaleConfig } from 'react-native-calendars';

// --- Configs ---
import { dateLocaleConfig } from '@configs/dateLocaleConfig';

LocaleConfig.locales['pt-BR'] = {
	monthNames: dateLocaleConfig.config.months,
	monthNamesShort: dateLocaleConfig.config.monthsShort,
	dayNames: dateLocaleConfig.config.weekdays,
	dayNamesShort: dateLocaleConfig.config.weekdaysShort,
	today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-BR';

const primaryColor = '#0077e6';

interface IFactoryCalendarProps extends CalendarProps {
	children?: React.ReactElement;
	containerProps?: IBoxProps;
}

export default function FactoryCalendar({
	containerProps,
	...calendarProps
}: IFactoryCalendarProps) {
	const FCalendar = Factory(Calendar);

	return (
		<Box
			position="relative"
			overflow="hidden"
			rounded="xl"
			shadow="5"
			{...containerProps}
		>
			<FCalendar
				theme={{
					agendaTodayColor: primaryColor,
					arrowColor: primaryColor,
					dotColor: primaryColor,
					indicatorColor: primaryColor,
					todayButtonTextColor: primaryColor,
					selectedDayBackgroundColor: primaryColor,
					todayDotColor: primaryColor,
					todayTextColor: primaryColor,
					textMonthFontFamily: 'Poppins_600SemiBold',
					textDayHeaderFontFamily: 'Poppins_300Light',
					textDayFontFamily: 'Poppins_400Regular',
				}}
				enableSwipeMonths
				{...calendarProps}
			/>
		</Box>
	);
}
