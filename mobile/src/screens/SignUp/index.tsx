import React from 'react';

// --- Native Base ---
import { Button, FormControl, VStack, Image, Input, Flex } from 'native-base';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Components ---
import BaseScreen from '@components/BaseScreen';

// --- Utils ---
import avoidKeyboardView from '@utils/avoidKeyboardView';

// --- Images ---
const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.matches(/^[A-Za-z ]*$/, 'Enter valid name!')
		.max(40)
		.required(),
	email: Yup.string().email().required('E-mail is required!'),
	password: Yup.string()
		.min(8, 'Password is too short - should be 8 chars minimum')
		.matches(/(?=.*[0-9])/, 'Password should have at least one digit')
		.matches(/(?=.*[a-z])/, 'Password should have at least one lowercase letter')
		.matches(/(?=.*[A-Z])/, 'Password should have at least one uppercase letter')
		.required('Password is required!'),
	passwordConfirmation: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Passwords must match!'
	),
});

export default function SignUpScreen({ navigation }) {
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
		<BaseScreen>
			<Image
				source={bgImage}
				size="full"
				alt="Travel Wallpapers"
				position="absolute"
				{...avoidKeyboardView}
			/>

			{/* // TODO - Adicionar Linear Gradient para contrastar o plano de fundo */}

			<Flex w="full" h="full" justify="flex-end">
				<VStack w="full" space="4">
					<FormControl isInvalid={errors.name}>
						<FormControl.Label>Name</FormControl.Label>
						<Controller
							control={control}
							name="name"
							render={({ field: { onChange, onBlur } }) => (
								<Input
									variant="filled"
									type="text"
									placeholder="Name"
									onBlur={onBlur}
									onChangeText={value => onChange(value)}
								/>
							)}
						/>
						<FormControl.ErrorMessage>{errors.name?.message}</FormControl.ErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.email}>
						<FormControl.Label>E-mail</FormControl.Label>
						<Controller
							control={control}
							name="email"
							render={({ field: { onChange, onBlur } }) => (
								<Input
									variant="filled"
									type="email"
									placeholder="E-mail"
									onBlur={onBlur}
									onChangeText={value => onChange(value)}
								/>
							)}
						/>
						<FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
					</FormControl>

					<FormControl isInvalid={errors.password}>
						<FormControl.Label>Password</FormControl.Label>
						<Controller
							control={control}
							name="password"
							render={({ field: { onChange, onBlur } }) => (
								<Input
									variant="filled"
									type="password"
									placeholder="Password"
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
						<FormControl.Label>Confirm Password</FormControl.Label>
						<Controller
							control={control}
							name="passwordConfirmation"
							render={({ field: { onChange, onBlur } }) => (
								<Input
									variant="filled"
									type="password"
									placeholder="PasswordConfirmation"
									onBlur={onBlur}
									onChangeText={value => onChange(value)}
								/>
							)}
						/>
						<FormControl.ErrorMessage>
							{errors.passwordConfirmation?.message}
						</FormControl.ErrorMessage>
					</FormControl>

					<Button
						isLoading={isSubmitting}
						isLoadingText="Logging In"
						onPress={handleSubmit(onSubmit)}
					>
						Login
					</Button>
				</VStack>
			</Flex>
		</BaseScreen>
	);
}
