export interface CreateUser {
	name: string;
	lastName: string;
	age: number;
	email: string;
	country: string;
}

export type UpdateUser = Partial<Omit<CreateUser, 'email' | 'age'>>;
