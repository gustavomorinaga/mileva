// ! SERVIÇO DE AUTENTICAÇÃO TEMPORÁRIO!!!

import AsyncStorage from '@react-native-async-storage/async-storage';
import create from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
	isAuthenticated: boolean;

	// eslint-disable-next-line no-unused-vars
	setAuthentication: (auth?: boolean) => void;
}

const useAuthStore = create<State>(
	persist(
		(set, get) => ({
			isAuthenticated: false,

			setAuthentication: async (auth?: boolean) => {
				const isAuthenticated = auth ?? !get().isAuthenticated;

				set(() => ({ isAuthenticated }));
			},
		}),
		{
			name: 'auth-storage',
			getStorage: () => AsyncStorage,
		}
	)
);

export default useAuthStore;
