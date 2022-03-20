// ! SERVIÇO DE AUTENTICAÇÃO TEMPORÁRIO!!!

import create from 'zustand';

interface State {
	isAuthenticated: boolean;

	// eslint-disable-next-line no-unused-vars
	setAuthentication: (auth?: boolean) => void;
}

const useAuthStore = create<State>((set, get) => ({
	isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')),

	setAuthentication: (auth?: boolean) => {
		const isAuthenticated = auth ?? !get().isAuthenticated;
		localStorage.setItem('isAuthenticated', isAuthenticated.toString());

		set(() => ({ isAuthenticated }));
	},
}));

export default useAuthStore;
