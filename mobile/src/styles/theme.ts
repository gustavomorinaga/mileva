import { extendTheme } from 'native-base';

const config = {
	useSystemColorMode: false,
	initialColorMode: 'dark',
};

const theme = extendTheme({ config });

type CustomThemeType = typeof theme;

declare module 'native-base' {
	// eslint-disable-next-line no-unused-vars
	interface ICustomTheme extends CustomThemeType {}
}

export default theme;
