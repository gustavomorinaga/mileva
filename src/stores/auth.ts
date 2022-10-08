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
			avatarUrl: null,
			email: null,
			name: null,
			firstName: null,

			login: async ({ email }) => {
				const auth: IAuth = {
					email,
					avatarUrl: 'https://github.com/gmatthewsfeuer.png',
					name: 'Gustavo Matheus',
					firstName: 'Gustavo Matheus'.split(' ')[0],
					isAuthenticated: true,
				};

				console.log(auth);

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
