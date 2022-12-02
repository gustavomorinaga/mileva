export const getRealDate = (date?: Date) => {
	if (!date) date = new Date();

	const [dateComponents, timeComponents] = date.toISOString().split('T');

	const [year, month, day] = dateComponents.split('-');
	const [hours, minutes, seconds] = timeComponents.split(':');

	return new Date(+year, +month - 1, +day, +hours, +minutes, +seconds.split('.')[0]);
};
