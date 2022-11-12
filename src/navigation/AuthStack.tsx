import React from 'react';

// --- React Navigation ---
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

// --- Navigation ---
import { TRootTabParamList } from '@navigation/TabNavigator';

// --- Screens ---
import SignInScreen from '@screens/SignIn';
import SignUpScreen from '@screens/SignUp';
import ForgotPasswordScreen from '@screens/ForgotPassword';

// --- Configs ---
import stackNavigatorConfig from '@configs/stackNavigatorConfig';

export type TAuthStackParamList = {
	'Sign In': undefined;
	'Sign Up': undefined;
	'Forgot Password': undefined;
};

export type TSignInParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<TAuthStackParamList, 'Sign In'>
>;
export type TSignUpParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<TAuthStackParamList, 'Sign Up'>
>;
export type TForgotPasswordParamProps = CompositeScreenProps<
	BottomTabScreenProps<TRootTabParamList>,
	StackScreenProps<TAuthStackParamList, 'Forgot Password'>
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
