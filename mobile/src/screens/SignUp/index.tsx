import React, { useState } from 'react';

// --- Native Base ---
import {
	Button,
	FormControl,
	VStack,
	Image,
	Input,
	IconButton,
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
import { Ionicons } from '@expo/vector-icons';

// --- Images ---
const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(/^[A-Za-z ]*$/, 'Enter valid name!')
		.max(40)
		.required(),
	email: Yup.string().email().required('E-mail é obrigatório!'),
	password: Yup.string()
		.min(8, 'Senha muito curta - deve ter no mínimo 8 caracteres!')
		.matches(/(?=.*[0-9])/, 'Senha deve conter pelo menos um dígito!')
		.matches(/(?=.*[a-z])/, 'Senha deve conter pelo menos uma letra minúscula!')
		.matches(/(?=.*[A-Z])/, 'Senha deve conter pelo menos uma letra maiúscula!')
		.required('Senha é obrigatória!'),
	passwordConfirmation: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'As senhas devem ser iguais!'
	),
});

export default function SignUpScreen({ navigation }) {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

	const handleShowPassword = () => setShowPassword(!showPassword);
	const handleShowPasswordConfirmation = () =>
		setShowPasswordConfirmation(!showPasswordConfirmation);

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
								<FormControl isInvalid={errors.name}>
									<FormControl.Label>
										<Text color="lightText">Nome</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="name"
										render={({ field: { onChange, onBlur } }) => (
											<Input
												variant="outline"
												type="text"
												borderRadius="xl"
												color="lightText"
												onBlur={onBlur}
												onChangeText={value => onChange(value)}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.name?.message}
									</FormControl.ErrorMessage>
								</FormControl>

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
												type={showPassword ? 'text' : 'password'}
												borderRadius="xl"
												color="lightText"
												InputRightElement={
													<IconButton
														variant="unstyled"
														rounded="xl"
														onPress={handleShowPassword}
														_icon={{
															as: Ionicons,
															name: showPassword ? 'eye-off-outline' : 'eye-outline',
															color: 'lightText',
														}}
													/>
												}
												onBlur={onBlur}
												onChangeText={value => onChange(value)}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.password?.message}
									</FormControl.ErrorMessage>
								</FormControl>

								<FormControl isInvalid={errors.password}>
									<FormControl.Label>
										<Text color="lightText">Confirme a senha</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="passwordConfirmation"
										render={({ field: { onChange, onBlur } }) => (
											<Input
												variant="outline"
												type={showPasswordConfirmation ? 'text' : 'password'}
												borderRadius="xl"
												color="lightText"
												InputRightElement={
													<IconButton
														variant="unstyled"
														onPress={handleShowPasswordConfirmation}
														_icon={{
															as: Ionicons,
															name: showPasswordConfirmation
																? 'eye-off-outline'
																: 'eye-outline',
															color: 'lightText',
														}}
													/>
												}
												onBlur={onBlur}
												onChangeText={value => onChange(value)}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.passwordConfirmation?.message}
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
									{isSubmitting ? 'Cadastrando...' : 'Cadastrar-se'}
								</Text>
							</Button>

							<Flex direction="row" justify="space-between">
								<Link onPress={() => navigation.navigate('Sign In')}>
									<Flex direction="row" align="center">
										<Icon
											as={Ionicons}
											name="arrow-back"
											size="sm"
											color="lightText"
											mr="2"
										/>

										<Text color="lightText">Entrar na minha conta</Text>
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
