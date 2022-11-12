import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// --- Interfaces ---
import { IAuth } from '@interfaces/IAuth';

// --- Date-FNS ---
import { formatISO } from 'date-fns';

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
					avatar: 'https://github.com/gmatthewsfeuer.png',
					name: 'Gustavo Matheus',
					firstName: 'Gustavo Matheus'.split(' ')[0],
					email,
					birthday: formatISO(new Date('2000-10-27')),
					gender: 'male',
					phone: '(11) 99769-2927',
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
