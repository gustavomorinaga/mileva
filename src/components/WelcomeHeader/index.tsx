import React from 'react';

// --- Native-Base ---
import { Avatar, Flex, Heading, Stack, Text } from 'native-base';

// --- Stores ---
import useAuthStore from '@stores/auth';

export default function WelcomeHeaderComponent() {
	const auth = useAuthStore(state => state);

	return (
		<Flex direction="row" justify="space-between" mb="7">
			<Stack>
				<Heading color="white">{`Olá, ${auth.firstName}`}</Heading>
				<Text color="white">Qual a próxima parada?</Text>
			</Stack>

			<Avatar source={{ uri: auth.avatarUrl }} />
		</Flex>
	);
}
