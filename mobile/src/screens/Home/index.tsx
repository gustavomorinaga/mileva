import React from 'react';

import { Text } from 'native-base';

import BaseScreen from '@components/BaseScreen';

export default function HomeScreen({ route: { params } }) {
	const { email, password } = params;

	return (
		<BaseScreen>
			<Text>{email}</Text>
			<Text>{password}</Text>
		</BaseScreen>
	);
}
