import React from 'react';

// --- Native Base ---
import {
	Button,
	FormControl,
	VStack,
	Image,
	Input,
	Flex,
	Box,
	Text,
	Link,
	Icon,
} from 'native-base';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Components ---
import BaseScreen from '@components/BaseScreen';

// --- Utils ---
import avoidKeyboardView from '@utils/avoidKeyboardView';

// --- Icons ---
import { Ionicons } from '@expo/vector-icons';

// --- Images ---
const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required('E-mail é obrigatório!'),
	password: Yup.string()
		.min(8, 'Senha muito curta - deve ter no mínimo 8 caracteres!')
		.matches(/(?=.*[0-9])/, 'Senha deve conter pelo menos um dígito!')
		.matches(/(?=.*[a-z])/, 'Senha deve conter pelo menos uma letra minúscula!')
		.matches(/(?=.*[A-Z])/, 'Senha deve conter pelo menos uma letra maiúscula!')
		.required('Senha é obrigatória!'),
});

export default function SignInScreen({ navigation }) {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const onSubmit = ({ email, password }) =>
		new Promise(() =>
			setTimeout(() => navigation.navigate('Home', { email, password }), 500)
		);

	return (
		<>
			<Image
				source={bgImage}
				size="full"
				alt="Travel Wallpapers"
				position="absolute"
				{...avoidKeyboardView}
			/>

			<Box
				bg={{
					linearGradient: {
						colors: ['transparent', 'black'],
						start: [0, -2],
						end: [2, 1],
					},
				}}
				w="full"
				h="full"
			>
				<BaseScreen>
					<Flex w="full" h="full" justify="flex-end">
						<VStack w="full" space="16">
							<VStack w="full" space="4">
								<FormControl isInvalid={errors.email}>
									<FormControl.Label>
										<Text color="lightText">E-mail</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="email"
										render={({ field: { onChange, onBlur } }) => (
											<Input
												variant="outline"
												type="email"
												borderRadius="xl"
												color="lightText"
												onBlur={onBlur}
												onChangeText={value => onChange(value)}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.email?.message}
									</FormControl.ErrorMessage>
								</FormControl>

								<FormControl isInvalid={errors.password}>
									<FormControl.Label>
										<Text color="lightText">Password</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="password"
										render={({ field: { onChange, onBlur } }) => (
											<Input
												variant="outline"
												type="password"
												borderRadius="xl"
												color="lightText"
												onBlur={onBlur}
												onChangeText={value => onChange(value)}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.password?.message}
									</FormControl.ErrorMessage>
								</FormControl>
							</VStack>

							<Button
								isLoading={isSubmitting}
								bgColor="darkBlue.500"
								rounded="xl"
								p="3"
								onPress={handleSubmit(onSubmit)}
							>
								<Text color="lightText" fontSize="md" fontWeight="600">
									{isSubmitting ? 'Entrando...' : 'Entrar'}
								</Text>
							</Button>

							<Flex direction="row" justify="space-between">
								<Link>
									<Text color="lightText">Esqueci a senha</Text>
								</Link>

								<Link onPress={() => navigation.navigate('Sign Up')}>
									<Flex direction="row" align="center">
										<Text color="lightText">Cadastrar-se</Text>

										<Icon
											as={Ionicons}
											name="arrow-forward"
											size="sm"
											color="lightText"
											ml="2"
										/>
									</Flex>
								</Link>
							</Flex>
						</VStack>
					</Flex>
				</BaseScreen>
			</Box>
		</>
	);
}
