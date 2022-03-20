import { extendTheme } from 'native-base';

export const theme = extendTheme({
	fontConfig: {
		Poppins: {
			100: {
				normal: 'Poppins_100Thin',
			},
			200: {
				normal: 'Poppins_200ExtraLight',
			},
			300: {
				normal: 'Poppins_300Light',
			},
			400: {
				normal: 'Poppins_400Regular',
			},
			600: {
				normal: 'Poppins_600SemiBold',
			},
			700: {
				normal: 'Poppins_700Bold',
			},
		},
	},

	fonts: {
		heading: 'Poppins',
		body: 'Poppins',
		mono: 'Poppins',
	},

	components: {
		Input: {
			defaultProps: { fontFamily: 'body' },
		},
		Button: {
			defaultProps: { fontFamily: 'body' },
		},
	},
});

type CustomThemeType = typeof theme;

declare module 'native-base' {
	// eslint-disable-next-line no-unused-vars
	interface ICustomTheme extends CustomThemeType {}
}
