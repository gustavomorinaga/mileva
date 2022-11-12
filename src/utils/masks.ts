export const maskPhone = (value: string) =>
	value
		.replace(/\D/g, '')
		.replace(/(\d{2})(\d)/, '($1) $2')
		.replace(/(\d{5})(\d{4})(\d)/, '$1-$2');
