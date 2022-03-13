import React from 'react';

import { Icon, NativeBaseProvider } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Ionicons } from '@expo/vector-icons';

// import SignInScreen from '@screens/signIn';
// import SignUpScreen from '@screens/signUp';
import HomeScreen from '@screens/home';
import FavoritesScreen from '@screens/favorites';
import ScheduleScreen from '@screens/schedule';
import AccountScreen from '@screens/profile';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<SafeAreaProvider>
				<NavigationContainer>
					<Tab.Navigator
						screenOptions={({ route }) => ({
							tabBarIcon: ({ focused, size }) => {
								const iconProps = {
									name: '',
									size,
									color: focused ? 'darkBlue.500' : 'dark.500',
								};

								switch (route.name) {
									case 'Login':
										iconProps.name = 'enter';
										break;
									case 'Home':
										iconProps.name = 'home';
										break;
									case 'Favorites':
										iconProps.name = 'heart';
										break;
									case 'Schedule':
										iconProps.name = 'briefcase';
										break;
									case 'Account':
										iconProps.name = 'person';
										break;
									default:
										iconProps.name = 'alert-circle';
										break;
								}

								return <Icon as={Ionicons} {...iconProps} />;
							},
							headerShown: false,
							tabBarShowLabel: false,
						})}
					>
						{/* <Tab.Screen name="Login" component={LoginScreen} /> */}
						<Tab.Screen name="Home" component={HomeScreen} />
						<Tab.Screen name="Favorites" component={FavoritesScreen} />
						<Tab.Screen name="Schedule" component={ScheduleScreen} />
						<Tab.Screen name="Account" component={AccountScreen} />
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</NativeBaseProvider>
	);
}
