import create from 'zustand';

// --- Interfaces ---
import { INotification } from '@interfaces/INotification';

interface State {
	notifications: INotification[];
}

const initialState: State = {
	notifications: [
		{
			_id: '1',
			type: 'discover',
			title: 'Que tal descobrir novos lugares?',
			description: 'Dê uma olhada na nossa lista de destinos!',
			date: '2022-11-09T14:26:19.067Z',
		},
		{
			_id: '2',
			type: 'notice',
			title: 'Temos novidades pra te contar!',
			description: 'Quer ouvir as boas novas?',
			date: '2022-11-09T14:26:19.067Z',
		},
		{
			_id: '3',
			type: 'promotion',
			title: 'Há uma promoção de viagem te esperando!',
			description: 'Dê uma olhada nas promoções e economizar na sua próxima viagem!',
			date: '2022-11-09T14:26:19.067Z',
		},
	],
};

const useNotificationsStore = create<State>((set, get) => ({
	...initialState,
}));

export default useNotificationsStore;
