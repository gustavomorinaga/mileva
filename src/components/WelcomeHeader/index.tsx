import React from 'react';

// --- React Navigation ---
import { useNavigation } from '@react-navigation/native';

// --- Native-Base ---
import { Avatar, Heading, Pressable, Stack, Text } from 'native-base';

// --- Components ---
import IconButton from '@components/IconButton';

// --- Stores ---
import useAuthStore from '@stores/auth';

export default function WelcomeHeaderComponent() {
	const auth = useAuthStore(state => state);

	const navigation = useNavigation<any>();

	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between">
			<Stack>
				<Heading color="lightText">{`Olá, ${auth.firstName}`}</Heading>
				<Text color="lightText">Qual a próxima parada?</Text>
			</Stack>

			<Stack direction="row" space="2">
				<Stack direction="row">
					<IconButton name="notifications" color="lightText" badge={2} />
				</Stack>

				<Pressable onPress={() => navigation.navigate('Account')}>
					<Avatar source={{ uri: auth.avatar }} borderColor="white" borderWidth="2" />
				</Pressable>
			</Stack>
		</Stack>
	);
}
