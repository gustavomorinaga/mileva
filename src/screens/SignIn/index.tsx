import React, { useRef, useState } from 'react';
import { BlurView } from 'expo-blur';

// --- Navigation ---
import { TSignInParamProps } from '@navigation/AuthStack';

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
const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Digite um e-mail válido!').required('E-mail é obrigatório!'),
	password: Yup.string().required('Senha é obrigatória!'),
});

type FormType = OmitNever<Yup.InferType<typeof validationSchema>>;

export default function SignInScreen({ navigation }: TSignInParamProps) {
	const login = useAuthStore(state => state.login);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const [showPassword, setShowPassword] = useState(false);

	const passwordRef = useRef(null);

	const handleShowPassword = () => setShowPassword(!showPassword);

	const onSubmit = (values: FormType) =>
		new Promise<void>((resolve, reject) =>
			setTimeout(() => {
				login(values).then(({ isAuthenticated }) =>
					isAuthenticated ? resolve(navigation.navigate('Home')) : reject()
				);
			}, 500)
		);

	return (
		<View flex={1} bgColor="black">
			<View position="absolute" zIndex={9} flex={1}>
				<BlurView intensity={5} style={{ flex: 1 }}>
					<Image
						source={bgImage}
						size="full"
						alt="Photo by Sacha Verheij on Unsplash"
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
							<Logo width="100%" height={250} />
						</AspectRatio>

						<VStack w="full" space="4">
							<FormControl isInvalid={Boolean(errors.email)}>
								<FormControl.Label>
									<Text color="lightText">E-mail</Text>
								</FormControl.Label>
								<Controller
									control={control}
									name="email"
									render={({ field: { onChange, onBlur } }) => (
										<Input
											variant="outline"
											type="text"
											borderRadius="xl"
											color="lightText"
											selectionColor="lightText"
											autoCapitalize="none"
											returnKeyType="next"
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
											selectionColor="lightText"
											autoCapitalize="none"
											returnKeyType="join"
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
											onBlur={onBlur}
											onChangeText={value => onChange(value)}
											onSubmitEditing={handleSubmit(onSubmit)}
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
							isLoadingText="Entrando..."
							bgColor="darkBlue.500"
							rounded="xl"
							p="3"
							onPress={handleSubmit(onSubmit)}
						>
							Entrar
						</Button>

						<Flex direction="row" justify="space-between">
							<Link onPress={() => navigation.navigate('Forgot Password')}>
								<Text color="lightText" py="2" pr="2">
									Esqueci a senha
								</Text>
							</Link>

							<Link onPress={() => navigation.navigate('Sign Up')}>
								<Flex direction="row" align="center" py="2" pl="2">
									<Text color="lightText">Cadastrar-se</Text>

									<Icon name="arrow-forward" size="sm" color="lightText" ml="2" />
								</Flex>
							</Link>
						</Flex>
					</VStack>
				</Flex>
			</BaseScreen>
		</View>
	);
}
