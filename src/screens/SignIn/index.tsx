import React, { useState } from 'react';

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
	View,
} from 'native-base';

// --- Stores ---
import useAuthStore from '@stores/auth';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import IconComponent from '@components/Icon';
import IconButtonComponent from '@components/IconButton';

// --- Utils ---
import avoidKeyboardView from '@utils/avoidKeyboardView';

// --- Types ---
import { TSignInProps } from '@~types/TSignInProps';

// --- Images ---
const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Digite um e-mail válido!').required('E-mail é obrigatório!'),
	password: Yup.string()
		.min(8, 'Senha muito curta - deve ter no mínimo 8 caracteres!')
		.matches(/(?=.*[0-9])/, 'Senha deve conter pelo menos um dígito!')
		.matches(/(?=.*[a-z])/, 'Senha deve conter pelo menos uma letra minúscula!')
		.matches(/(?=.*[A-Z])/, 'Senha deve conter pelo menos uma letra maiúscula!')
		.required('Senha é obrigatória!'),
});

export default function SignInScreen({ navigation }: TSignInProps) {
	const setAuthentication = useAuthStore(({ setAuthentication }) => setAuthentication);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const [showPassword, setShowPassword] = useState(false);

	const handleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = (values: typeof validationSchema.fields) =>
		new Promise(() =>
			setTimeout(() => {
				setAuthentication();
				console.log(values);
				return navigation.navigate('Home');
			}, 500)
		);

	return (
		<>
			<View position="absolute" flex="1">
				<Image
					source={bgImage}
					size="full"
					alt="Travel Wallpapers"
					{...avoidKeyboardView}
				/>
				<Box
					bg={{
						linearGradient: {
							colors: ['transparent', 'black'],
							start: [2, 0],
							end: [2, 1],
						},
					}}
					w="full"
					h="full"
					position="absolute"
				></Box>
			</View>

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
											selectionColor="lightText"
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
											selectionColor="lightText"
											InputRightElement={
												<IconButtonComponent
													variant="unstyled"
													iconSize="sm"
													rounded="none"
													onPress={handleShowPassword}
													name={showPassword ? 'eye-off-outline' : 'eye-outline'}
													color="lightText"
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
								<Text color="lightText" py="2" pr="2">
									Esqueci a senha
								</Text>
							</Link>

							<Link onPress={() => navigation.navigate('Sign Up')}>
								<Flex direction="row" align="center" py="2" pl="2">
									<Text color="lightText">Cadastrar-se</Text>

									<IconComponent
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
		</>
	);
}
