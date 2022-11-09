export interface IAuth {
	isAuthenticated: boolean;

	avatar?: string;
	email: string;
	phone: string;
	name: string;
	firstName?: string;
	birthday?: string;
	gender?: 'male' | 'female' | 'other' | 'prefer not to say';
}
