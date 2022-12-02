export type INotificationTypes = 'discover' | 'notice' | 'promotion' | string;

export interface INotification {
	_id: string;
	type: INotificationTypes;
	title: string;
	description?: string;
	date: Date | string;
}
