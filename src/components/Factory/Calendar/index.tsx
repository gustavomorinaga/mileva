import React from 'react';

// --- Native-Base ---
import { Box, Factory, IBoxProps } from 'native-base';

// --- Calendars ---
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-BR'] = {
	monthNames: [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Outubro',
		'Novembro',
		'Dezembro',
	],
	monthNamesShort: [
		'Jan',
		'Fev',
		'Mar',
		'Abr',
		'Mai',
		'Jun',
		'Jul',
		'Ago',
		'Set',
		'Out',
		'Nov',
		'Dez',
	],
	dayNames: [
		'Domingo',
		'Segunda-feira',
		'Terça-feira',
		'Quarta-feira',
		'Quinta-feira',
		'Sexta-feira',
		'Sábado',
	],
	dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
	today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-BR';

interface IFactoryCalendarProps {
	containerProps?: IBoxProps;
}

export default function FactoryCalendar({ containerProps }: IFactoryCalendarProps) {
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
					arrowColor: '#0077e6',
					selectedDayBackgroundColor: '#0077e6',
					textMonthFontFamily: 'Poppins_600SemiBold',
					textDayHeaderFontFamily: 'Poppins_300Light',
					textDayFontFamily: 'Poppins_400Regular',
				}}
				enableSwipeMonths
			/>
		</Box>
	);
}
