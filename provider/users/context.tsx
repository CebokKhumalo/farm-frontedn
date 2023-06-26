import { createContext } from 'react';

export interface IPerson {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
}

// export interface ILogin {
//     password?: string;
//     emailor?: string;
// }

export interface IPersonStateContext {
    // readonly UserLogin?: ILogin;
    readonly UserCreated?: IPerson;
    readonly PersonById?: IPerson;
    readonly AllUser?: IPerson[];
    readonly UserLoggedIn?: IPerson;
}

export const INITIAL_STATE: IPersonStateContext = {
    // AllUser: []
};

export interface IPersonActionContext {
    // loginUser?: (payload: ILogin) => void;
    createUser?: (payload: IPerson) => void;
    getAllUser?: () => void; // Check if this line exists
    getUserById?: (payload: string) => void;
    getUserByCredentials?: (emailOrEmail: string, password: string) => void;
}

export const PersonContext = createContext<IPersonStateContext>(INITIAL_STATE);
export const PersonActionContext =
    createContext<IPersonActionContext>(undefined);
