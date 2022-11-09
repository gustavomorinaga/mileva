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
	login: (data: Login) => void;
}

const useAuthStore = create(
	persist<State>(
		(set, get) => ({
			isAuthenticated: false,

			avatar: null,
			email: null,
			name: null,
			firstName: null,
			birthday: null,
			gender: null,
			phone: null,

			login: async ({ email }) => {
				const auth: IAuth = {
					isAuthenticated: true,
					avatar: 'https://github.com/gmatthewsfeuer.png',
					name: 'Gustavo Matheus',
					firstName: 'Gustavo Matheus'.split(' ')[0],
					email,
					birthday: new Date('2000-10-27').toISOString(),
					gender: 'male',
					phone: '(11) 99769-2927',
				};

				set(() => auth);
			},
		}),
		{
			name: 'auth-storage',
			getStorage: () => AsyncStorage,
		}
	)
);

export default useAuthStore;
