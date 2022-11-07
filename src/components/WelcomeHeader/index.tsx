import React from 'react';

// --- Native-Base ---
import { Avatar, Badge, Heading, Stack, Text, ZStack } from 'native-base';

// --- Components ---
import IconButton from '@components/IconButton';

// --- Stores ---
import useAuthStore from '@stores/auth';

export default function WelcomeHeaderComponent() {
	const auth = useAuthStore(state => state);

	return (
		<Stack direction="row" alignItems="center" justifyContent="space-between" m="1">
			<Stack>
				<Heading color="lightText">{`Olá, ${auth.firstName}`}</Heading>
				<Text color="lightText">Qual a próxima parada?</Text>
			</Stack>

			<Stack direction="row" space="2">
				<Stack direction="row">
					<IconButton name="notifications" color="lightText" />
					<ZStack>
						<Badge
							colorScheme="danger"
							variant="solid"
							rounded="full"
							alignSelf="flex-end"
						>
							2
						</Badge>
					</ZStack>
				</Stack>

				<Avatar source={{ uri: auth.avatarUrl }} borderColor="white" borderWidth="2" />
			</Stack>
		</Stack>
	);
}
