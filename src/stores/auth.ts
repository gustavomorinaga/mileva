import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// --- Interfaces ---
import { IAuth } from '@interfaces/IAuth';

interface Login {
	email: string;
	password: string;
}

interface State extends IAuth {
	login: (data: Login) => Promise<{ isAuthenticated: boolean }>;
	logout: () => Promise<{ isAuthenticated: boolean }>;
}

const initialState = {
	isAuthenticated: false,

	avatar: null,
	email: null,
	name: null,
	firstName: null,
	birthday: null,
	gender: null,
	phone: null,
};

const useAuthStore = create(
	persist<State>(
		(set, get) => ({
			...initialState,

			login: async ({ email }) => {
				const auth: IAuth = {
					isAuthenticated: true,
					avatar:
						'https://avatars.dicebear.com/api/big-ears-neutral/Isabelly%20Rocha.png',
					name: 'Isabelly Rocha',
					firstName: 'Isabelly Rocha'.split(' ')[0],
					email,
					birthday: '1998-07-13',
					gender: 'male',
					phone: '(11) 93456-2123',
				};

				set(() => auth);

				return {
					isAuthenticated: get().isAuthenticated,
				};
			},

			logout: async () => {
				set(() => initialState);

				return {
					isAuthenticated: get().isAuthenticated,
				};
			},
		}),
		{
			name: 'auth-storage',
			getStorage: () => AsyncStorage,
		}
	)
);

export default useAuthStore;
