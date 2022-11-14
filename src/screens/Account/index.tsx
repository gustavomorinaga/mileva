import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

// --- Navigation ---
import { TAccountParamProps } from '@navigation/AccountStack';

// --- Native-Base ---
import {
	Avatar,
	Box,
	Button,
	Center,
	Divider,
	FormControl,
	Heading,
	Input,
	Pressable,
	ScrollView,
	Select,
	Stack,
	Text,
	ZStack,
} from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- DateTimePicker ---
import DateTimePicker from '@react-native-community/datetimepicker';

// --- Stores ---
import useAuthStore from '@stores/auth';

// --- Utils ---
import { maskPhone } from '@utils/masks';

// --- Date-FNS ---
import { format, formatISO } from 'date-fns';

// --- Types ---
import { OmitNever } from '@~types/TOmitNever';

const validationSchema = Yup.object().shape({
	avatar: Yup.string().optional(),
	name: Yup.string().required('Nome obrigatório!'),
	email: Yup.string().email('Digite um e-mail válido!').required('E-mail é obrigatório!'),
	birthday: Yup.string().required('Data de nascimento obrigatório!'),
	gender: Yup.string().required('Gênero obrigatório!'),
	phone: Yup.string().required('Telefone obrigatório!'),
});

type FormType = OmitNever<Yup.InferType<typeof validationSchema>>;

const GENDERS_OPTIONS = [
	{ label: 'Masculino', value: 'male' },
	{ label: 'Feminino', value: 'female' },
	{ label: 'Outro', value: 'other' },
	{ label: 'Prefiro não opinar', value: 'prefer not to say' },
];

export default function AccountScreen({ navigation }: TAccountParamProps) {
	const auth = useAuthStore(state => state);

	const [showDatePicker, setShowDatePicker] = useState(false);
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
		defaultValues: {
			avatar: auth.avatar,
			name: auth.name,
			email: auth.email,
			birthday: auth.birthday,
			gender: auth.gender,
			phone: auth.phone,
		} as FormType,
	});

	const handleShowDatePicker = (value: boolean) => setShowDatePicker(value);

	const handleLogout = () => {
		setIsLoggingOut(true);

		return new Promise<void>((resolve, reject) =>
			setTimeout(() => {
				auth.logout().then(({ isAuthenticated }) => {
					setIsLoggingOut(false);
					!isAuthenticated ? resolve(navigation.navigate('Auth')) : reject();
				});
			}, 500)
		);
	};

	const onSubmit = (values: FormType) => new Promise(() => setTimeout(() => {}, 500));

	return (
		<>
			<Header containerStyle={{ bgColor: 'muted.100' }}>
				<Stack direction="row" alignItems="center" justifyContent="center">
					<Heading color="darkText">Meu perfil</Heading>
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<SafeAreaView style={{ flex: 1, marginTop: -20, marginHorizontal: -20 }}>
					<ZStack zIndex={99}>
						<Box
							bg={{
								linearGradient: {
									colors: ['transparent', 'muted.100'],
									start: [0, 0.75],
									end: [0, 0],
								},
							}}
							w="full"
							h="8"
						/>
					</ZStack>
					<ScrollView
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ marginTop: 8, paddingTop: 10, paddingBottom: 30 }}
					>
						<Stack space="6" mx="5">
							<Center w="full">
								<Stack space="2">
									<Box rounded="full" borderWidth="2" borderColor="darkBlue.500">
										{/* `https://avatars.dicebear.com/api/big-ears-neutral/${auth.name}.png?mouth=variant0202` */}
										<Avatar
											source={{
												uri: auth.avatar,
											}}
											size="2xl"
											borderWidth="2"
											borderColor="muted.100"
										>
											<Icon name="person" size="2xl" />
										</Avatar>
									</Box>

									<Text color="darkBlue.500" textAlign="center">
										Alterar Imagem
									</Text>
								</Stack>
							</Center>

							<Stack space="2">
								<FormControl isInvalid={Boolean(errors.name)}>
									<FormControl.Label>
										<Text color="darkText">Nome</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="name"
										render={({ field: { onChange, onBlur, value } }) => (
											<Input
												placeholder="Digite o seu nome"
												variant="outline"
												type="text"
												borderRadius="xl"
												color="darkText"
												selectionColor="darkText"
												value={value}
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
										<Text color="darkText">E-mail</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="email"
										render={({ field: { onChange, onBlur, value } }) => (
											<Input
												placeholder="Digite o seu e-mail"
												variant="outline"
												type="text"
												borderRadius="xl"
												color="darkText"
												selectionColor="darkText"
												value={value}
												onBlur={onBlur}
												onChangeText={value => onChange(value.trim())}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.email?.message}
									</FormControl.ErrorMessage>
								</FormControl>

								<FormControl isInvalid={Boolean(errors.phone)}>
									<FormControl.Label>
										<Text color="darkText">Telefone</Text>
									</FormControl.Label>
									<Controller
										control={control}
										name="phone"
										render={({ field: { onChange, onBlur, value } }) => (
											<Input
												placeholder="Digite o seu telefone"
												variant="outline"
												type="text"
												borderRadius="xl"
												color="darkText"
												selectionColor="darkText"
												value={value}
												onBlur={onBlur}
												onChangeText={value => onChange(maskPhone(value.trim()))}
											/>
										)}
									/>
									<FormControl.ErrorMessage>
										{errors.email?.message}
									</FormControl.ErrorMessage>
								</FormControl>

								<Stack direction="row" space="2">
									<FormControl flex={1} isInvalid={Boolean(errors.birthday)}>
										<FormControl.Label>
											<Text color="darkText">Data de nascimento</Text>
										</FormControl.Label>
										<Controller
											control={control}
											name="birthday"
											render={({ field: { onChange, onBlur, value } }) => (
												<>
													<Pressable onPress={() => handleShowDatePicker(true)}>
														<Input
															placeholder="--/--/----"
															variant="outline"
															type="text"
															borderRadius="xl"
															color="darkText"
															selectionColor="darkText"
															isReadOnly
															InputRightElement={
																<Icon name="calendar" color="dark.300" mx="3" />
															}
															value={value ? format(new Date(value), 'dd/MM/yyyy') : ''}
															onBlur={onBlur}
														/>
													</Pressable>

													{showDatePicker && (
														<DateTimePicker
															mode="date"
															value={value ? new Date(value) : new Date()}
															onChange={(event, selectedDate) => {
																event.type === 'set' && onChange(formatISO(selectedDate));
																handleShowDatePicker(false);
															}}
														/>
													)}
												</>
											)}
										/>
										<FormControl.ErrorMessage>
											{errors.birthday?.message}
										</FormControl.ErrorMessage>
									</FormControl>

									<FormControl flex={1} isInvalid={Boolean(errors.gender)}>
										<FormControl.Label>
											<Text color="darkText">Gênero</Text>
										</FormControl.Label>
										<Controller
											control={control}
											name="gender"
											render={({ field: { onChange, value } }) => (
												<Select
													accessibilityLabel="Selecione o seu gênero"
													placeholder="Selecione o seu gênero"
													borderRadius="xl"
													color="darkText"
													dropdownIcon={
														<Icon name="caret-down" color="dark.300" mx="3" />
													}
													_item={{
														rounded: 'xl',
														_pressed: {
															bgColor: 'coolGray.200',
														},
													}}
													_selectedItem={{
														rounded: 'xl',
														bgColor: 'darkBlue.500',
														endIcon: (
															<Icon name="checkmark" size="lg" color="lightText" />
														),
														_text: {
															color: 'lightText',
														},
														_stack: {
															justifyContent: 'space-between',
														},
													}}
													selectedValue={value}
													onValueChange={value => onChange(value)}
												>
													{GENDERS_OPTIONS.map((item, index) => (
														<Select.Item
															key={index}
															label={item.label}
															value={item.value}
														/>
													))}
												</Select>
											)}
										/>
										<FormControl.ErrorMessage>
											{errors.gender?.message}
										</FormControl.ErrorMessage>
									</FormControl>
								</Stack>
							</Stack>

							<Button
								size="lg"
								rounded="xl"
								bgColor="darkBlue.500"
								isLoading={isSubmitting}
								isLoadingText="Salvando..."
								onPress={handleSubmit(onSubmit)}
							>
								Salvar
							</Button>

							<Divider />

							<Button
								variant="ghost"
								size="sm"
								rounded="xl"
								colorScheme="danger"
								isLoading={isLoggingOut}
								isLoadingText="Saindo..."
								onPress={handleLogout}
							>
								Sair da minha conta
							</Button>
						</Stack>
					</ScrollView>
				</SafeAreaView>
			</BaseScreen>
		</>
	);
}
