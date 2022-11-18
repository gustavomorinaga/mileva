module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					extensions: [
						'.ios.ts',
						'.android.ts',
						'.ts',
						'.ios.tsx',
						'.android.tsx',
						'.jsx',
						'.js',
						'.json',
					],
					alias: {
						'@native-base/icons': '@native-base/icons/lib',

						'@docs': './public/docs',
						'@assets': './public/assets',
						'@icons': './public/assets/icons',
						'@images': './public/assets/images',

						'@components': './src/components',
						'@configs': './src/configs',
						'@interfaces': './src/interfaces',
						'@navigation': './src/navigation',
						'@screens': './src/screens',
						'@scripts': './src/scripts',
						'@services': './src/services',
						'@stores': './src/stores',
						'@styles': './src/styles',
						'@~types': './src/types',
						'@utils': './src/utils',
					},
				},
			],
			'react-native-reanimated/plugin',
			[
				'import',
				{
					libraryName: 'react-use',
					camel2DashComponentName: false,
					customName(/** @type {string} */ name) {
						const libraryDirectory = name.startsWith('Use')
							? 'lib/component'
							: name.startsWith('create')
							? 'lib/factory'
							: 'lib';
						return `react-use/${libraryDirectory}/${name}`;
					},
				},
				'import-react-use',
			],
		],
	};
};
