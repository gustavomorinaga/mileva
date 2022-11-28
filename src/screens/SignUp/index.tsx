import React, { useRef, useState } from 'react';
import { BlurView } from 'expo-blur';

// --- Navigation ---
import { TSignUpParamProps } from '@navigation/AuthStack';

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
	AspectRatio,
} from 'native-base';

// --- Stores ---
import useAuthStore from '@stores/auth';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';

// --- Utils ---
import avoidKeyboardView from '@utils/avoidKeyboardView';

// --- Types ---
import { OmitNever } from '@~types/TOmitNever';

// --- Images ---
import Logo from '@assets/logo.svg';
const bgImage = require('@images/01_background.jpg');

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(/^[A-Za-z ]*$/, 'Entre com um nome válido!')
		.max(40)
		.required('Nome é obrigatório!'),
	email: Yup.string().email('Digite um e-mail válido!').required('E-mail é obrigatório!'),
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

type FormType = OmitNever<Yup.InferType<typeof validationSchema>>;

export default function SignUpScreen({ navigation }: TSignUpParamProps) {
	const register = useAuthStore(state => state.login);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

	const [emailRef, passwordRef, confirmPasswordRef] = [
		useRef(null),
		useRef(null),
		useRef(null),
	];

	const handleShowPassword = () => setShowPassword(!showPassword);
	const handleShowPasswordConfirmation = () =>
		setShowPasswordConfirmation(!showPasswordConfirmation);

	const onSubmit = (values: FormType) =>
		new Promise(() =>
			setTimeout(() => {
				register(values);
				console.log(values);
				return navigation.navigate('Home');
			}, 500)
		);

	return (
		<View flex={1} bgColor="black">
			<View position="absolute" flex="1">
				<BlurView intensity={5} style={{ flex: 1 }}>
					<Image
						source={bgImage}
						size="full"
						alt="Photo by Wil Stewart on Unsplash"
						opacity={0.3}
						{...avoidKeyboardView}
					/>
				</BlurView>

				<Box
					position="absolute"
					w="full"
					h="full"
					bg={{
						linearGradient: {
							colors: ['transparent', 'black'],
							start: [2, 0],
							end: [2, 1],
						},
					}}
				/>
			</View>

			<BaseScreen bgColor="transparent">
				<Flex w="full" h="full" justify="flex-end" pb="4">
					<VStack w="full" space="16">
						<AspectRatio ratio={{ base: 16 / 9 }}>
							<Logo width="100%" height={350} />
						</AspectRatio>

						<VStack w="full" space="4">
							<FormControl isInvalid={Boolean(errors.name)}>
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
											returnKeyType="next"
											blurOnSubmit={false}
											onSubmitEditing={() => emailRef.current.focus()}
											onBlur={onBlur}
											onChangeText={value => onChange(value.trim())}
										/>
									)}
								/>
								<FormControl.ErrorMessage>
									{errors.name?.message}
								</FormControl.ErrorMessage>
							</FormControl>

							<FormControl isInvalid={Boolean(errors.email)}>
								<FormControl.Label>
									<Text color="lightText">E-mail</Text>
								</FormControl.Label>
								<Controller
									control={control}
									name="email"
									render={({ field: { onChange, onBlur } }) => (
										<Input
											ref={emailRef}
											variant="outline"
											type="text"
											borderRadius="xl"
											color="lightText"
											returnKeyType="next"
											autoCapitalize="none"
											blurOnSubmit={false}
											onSubmitEditing={() => passwordRef.current.focus()}
											onBlur={onBlur}
											onChangeText={value => onChange(value.trim())}
										/>
									)}
								/>
								<FormControl.ErrorMessage>
									{errors.email?.message}
								</FormControl.ErrorMessage>
							</FormControl>

							<FormControl isInvalid={Boolean(errors.password)}>
								<FormControl.Label>
									<Text color="lightText">Senha</Text>
								</FormControl.Label>
								<Controller
									control={control}
									name="password"
									render={({ field: { onChange, onBlur } }) => (
										<Input
											ref={passwordRef}
											variant="outline"
											type={showPassword ? 'text' : 'password'}
											borderRadius="xl"
											color="lightText"
											InputRightElement={
												<IconButton
													variant="unstyled"
													iconSize="sm"
													rounded="none"
													onPress={handleShowPassword}
													name={showPassword ? 'eye-off-outline' : 'eye-outline'}
													color="lightText"
												/>
											}
											returnKeyType="next"
											autoCapitalize="none"
											blurOnSubmit={false}
											onSubmitEditing={() => confirmPasswordRef.current.focus()}
											onBlur={onBlur}
											onChangeText={value => onChange(value)}
										/>
									)}
								/>
								<FormControl.ErrorMessage>
									{errors.password?.message}
								</FormControl.ErrorMessage>
							</FormControl>

							<FormControl isInvalid={Boolean(errors.password)}>
								<FormControl.Label>
									<Text color="lightText">Confirme a senha</Text>
								</FormControl.Label>
								<Controller
									control={control}
									name="passwordConfirmation"
									render={({ field: { onChange, onBlur } }) => (
										<Input
											ref={confirmPasswordRef}
											variant="outline"
											type={showPasswordConfirmation ? 'text' : 'password'}
											borderRadius="xl"
											color="lightText"
											InputRightElement={
												<IconButton
													variant="unstyled"
													iconSize="sm"
													rounded="none"
													onPress={handleShowPasswordConfirmation}
													name={
														showPasswordConfirmation ? 'eye-off-outline' : 'eye-outline'
													}
													color="lightText"
												/>
											}
											returnKeyType="join"
											autoCapitalize="none"
											onBlur={onBlur}
											onChangeText={value => onChange(value)}
											onSubmitEditing={handleSubmit(onSubmit)}
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
							{isSubmitting ? 'Cadastrando...' : 'Cadastrar-se'}
						</Button>

						<Flex direction="row" justify="space-between">
							<Link onPress={() => navigation.navigate('Sign In')}>
								<Flex direction="row" align="center" py="2" pr="2">
									<Icon name="arrow-back" size="sm" color="lightText" mr="2" />

									<Text color="lightText">Entrar na minha conta</Text>
								</Flex>
							</Link>
						</Flex>
					</VStack>
				</Flex>
			</BaseScreen>
		</View>
	);
}
