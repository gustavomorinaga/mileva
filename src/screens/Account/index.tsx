import React, { useState } from 'react';

// --- React Navigation ---
import { useNavigation } from '@react-navigation/native';

// --- Native-Base ---
import {
	Avatar,
	Box,
	Button,
	Center,
	FormControl,
	Heading,
	Input,
	Pressable,
	Select,
	Stack,
	Text,
	View,
} from 'native-base';

// --- Components ---
import BaseScreen from '@components/BaseScreen';
import Header from '@components/Header';
import Icon from '@components/Icon';
import IconButton from '@components/IconButton';

// --- Form and Validations ---
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// --- DateTimePicker ---
import DateTimePicker from '@react-native-community/datetimepicker';

// --- Stores ---
import useAuthStore from '@stores/auth';

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

export default function AccountScreen() {
	const auth = useAuthStore(state => state);

	const navigation = useNavigation<any>();

	const [showDatePicker, setShowDatePicker] = useState(false);

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

	const onSubmit = (values: FormType) => new Promise(() => setTimeout(() => {}, 500));

	return (
		<>
			<Header containerStyle={{ bgColor: 'muted.100' }}>
				<Stack direction="row" alignItems="center" justifyContent="space-between">
					<IconButton
						name="arrow-back"
						color="lightText"
						bgColor="darkBlue.500"
						onPress={() => navigation.goBack()}
					/>

					<Heading color="darkText">Meu perfil</Heading>

					<View w="8" />
				</Stack>
			</Header>

			<BaseScreen mt={-12}>
				<Stack space="6">
					<Center w="full">
						<Stack space="2">
							<Box rounded="full" borderWidth="2" borderColor="darkBlue.500">
								<Avatar
									source={{
										uri: `https://avatars.dicebear.com/api/big-ears-neutral/${auth.name}.png?mouth=variant0202`,
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
							<FormControl.ErrorMessage>{errors.name?.message}</FormControl.ErrorMessage>
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
							<FormControl.ErrorMessage>{errors.email?.message}</FormControl.ErrorMessage>
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
													InputRightElement={
														<Icon name="calendar" color="dark.300" mx="3" />
													}
													isReadOnly={true}
													value={value ? new Date(value).toLocaleDateString() : ''}
													onBlur={onBlur}
												/>
											</Pressable>

											{showDatePicker && (
												<DateTimePicker
													mode="date"
													value={new Date()}
													onChange={(event, selectedDate) => {
														event.type === 'set' && onChange(selectedDate.toISOString());
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
											dropdownIcon={<Icon name="caret-down" color="dark.300" mx="3" />}
											_item={{
												rounded: 'xl',
												_pressed: {
													bgColor: 'coolGray.200',
												},
											}}
											_selectedItem={{
												rounded: 'xl',
												bgColor: 'darkBlue.500',
												endIcon: <Icon name="checkmark" size="lg" color="lightText" />,
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
												></Select.Item>
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
						isLoading={isSubmitting}
						size="lg"
						rounded="xl"
						bgColor="darkBlue.500"
						onPress={handleSubmit(onSubmit)}
					>
						{isSubmitting ? 'Salvando...' : 'Salvar'}
					</Button>
				</Stack>
			</BaseScreen>
		</>
	);
}
