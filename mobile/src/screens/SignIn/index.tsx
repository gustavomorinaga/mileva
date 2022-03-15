import React from 'react';

import { Button, FormControl, HStack, Image, Input, View } from 'native-base';

// --- Form and Validations ---
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	email: Yup.string().required('E-mail is required!'),
	password: Yup.string().required('Password is required!'),
});

export default function SignInScreen() {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const onSubmit = ({ email, password }) =>
		new Promise(() => setTimeout(() => console.log({ email, password }), 500));

	return (
		<View w="full" h="full">
			<Image source={bgImage} size="full" alt="Travel Wallpapers" />

			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack w="full" py="2">
					<FormControl isInvalid={errors.email}>
						<FormControl.Label>E-mail</FormControl.Label>
						<Input
							{...register('email')}
							variant="filled"
							type="text"
							placeholder="E-mail"
						/>
						<FormControl.ErrorMessage>{errors.email.message}</FormControl.ErrorMessage>
					</FormControl>

					<Button isLoading={isSubmitting} isLoadingText="Logging In">
						Login
					</Button>
				</HStack>
			</form>
		</View>
	);
}
