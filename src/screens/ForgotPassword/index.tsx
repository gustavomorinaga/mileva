import React from 'react';

// --- Navigation ---
import { TForgotPasswordParamProps } from '@navigation/AuthStack';

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

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Icon from '@components/Icon';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- Utils ---
import avoidKeyboardView from '@utils/avoidKeyboardView';

// --- Types ---
import { OmitNever } from '@~types/TOmitNever';

// --- Images ---
const bgImage = require('@images/00_background.jpg');

const validationSchema = Yup.object().shape({
	email: Yup.string().email('Digite um e-mail válido!').required('E-mail é obrigatório!'),
});

type FormType = OmitNever<Yup.InferType<typeof validationSchema>>;

export default function ForgotPasswordScreen({ navigation }: TForgotPasswordParamProps) {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({ resolver: yupResolver(validationSchema), mode: 'onTouched' });

	const onSubmit = (values: FormType) =>
		new Promise<void>((resolve, reject) => setTimeout(() => {}, 500));

	return (
		<>
			<View position="absolute" zIndex={9} flex={1}>
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
				/>
			</View>

			<BaseScreen bgColor="transparent">
				<Flex w="full" h="full" justify="flex-end" pb="4">
					<VStack w="full" space="16">
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
											onBlur={onBlur}
											onChangeText={value => onChange(value.trim())}
										/>
									)}
								/>
								<FormControl.ErrorMessage>
									{errors.email?.message}
								</FormControl.ErrorMessage>
							</FormControl>
						</VStack>

						<Button
							isLoading={isSubmitting}
							isLoadingText="Enviando..."
							bgColor="darkBlue.500"
							rounded="xl"
							p="3"
							onPress={handleSubmit(onSubmit)}
						>
							Enviar
						</Button>

						<Flex direction="row" justify="flex-end">
							<Link alignSelf="flex-end" onPress={() => navigation.navigate('Sign In')}>
								<Flex direction="row" align="center" py="2" pl="2">
									<Text color="lightText">Entrar na conta</Text>

									<Icon name="arrow-forward" size="sm" color="lightText" ml="2" />
								</Flex>
							</Link>
						</Flex>
					</VStack>
				</Flex>
			</BaseScreen>
		</>
	);
}
