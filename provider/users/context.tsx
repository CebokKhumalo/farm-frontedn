import { createContext } from 'react';

export interface IPerson {
    id: string;
    userName: string;
    name: string;
    password: string;
    email: string;
}

export interface ILogin {
    password?: string;
    email?: string;
}

export const INITIAL_STATE: IPersonStateContext = {};

export interface IPersonStateContext {
    readonly UserLogin?: ILogin;
    readonly CreateUser?: IPerson;
    readonly GetAllUser?: IPerson;
}

export interface IPersonActionContext {
    loginUser?: (payload: ILogin) => void;
    createUser?: (payload: IPerson) => void;
    getAllUser?: (paylpad: IPerson) => void;
}

export const PersonContext = createContext<IPersonStateContext>(INITIAL_STATE);
export const PersonActionContext =
    createContext<IPersonActionContext>(undefined);
