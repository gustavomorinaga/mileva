import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList, TRootTabScreenProps } from '@navigation/TabNavigator';

// --- Screens ---
import SignInScreen from '@screens/SignIn';
import SignUpScreen from '@screens/SignUp';
import ForgotPasswordScreen from '@screens/ForgotPassword';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

type TAuthBottomTab<T extends keyof TRootTabParamList> = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList, T>,
	TRootTabScreenProps<keyof TRootTabParamList>
>;

export type TAuthStackParamList = {
	'Sign In': undefined;
	'Sign Up': undefined;
	'Forgot Password': undefined;
};

export type TSignInParamProps = CompositeScreenProps<
	StackScreenProps<TAuthStackParamList, 'Sign In'>,
	TAuthBottomTab<keyof TRootTabParamList>
>;
export type TSignUpParamProps = CompositeScreenProps<
	StackScreenProps<TAuthStackParamList, 'Sign Up'>,
	TAuthBottomTab<keyof TRootTabParamList>
>;
export type TForgotPasswordParamProps = CompositeScreenProps<
	StackScreenProps<TAuthStackParamList, 'Forgot Password'>,
	TAuthBottomTab<keyof TRootTabParamList>
>;

const Stack = createStackNavigator<TAuthStackParamList>();

export default function AuthStack() {
	return (
		<Stack.Navigator initialRouteName="Sign In" {...stackNavigatorConfig}>
			<Stack.Screen name="Sign In" component={SignInScreen} />
			<Stack.Screen name="Sign Up" component={SignUpScreen} />
			<Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
		</Stack.Navigator>
	);
}
