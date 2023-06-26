import { createContext } from 'react';

export interface IEnclosure {
    id: string;
    enclosureName: string;
    currentCapacity: number;
    maxCapacity: number;
}

// export interface ILogin {
//     password?: string;
//     emailor?: string;
// }

export interface IEnclosureStateContext {
    // readonly UserLogin?: ILogin;
    readonly EnclosurCreated?: IEnclosure;
    readonly EnclosureById?: IEnclosure;
    readonly AllEnclosure?: IEnclosure[];
}

export const INITIAL_STATE: IEnclosureStateContext = {
    // AllUser: []
};

export interface IEnclosureActionContext {
    // loginUser?: (payload: ILogin) => void;
    createEnclosure?: (payload: IEnclosure) => void;
    getAllEnclosure?: () => void; // Check if this line exists
    getEnclosureById?: (payload: string) => void;
}

export const EnclosureContext =
    createContext<IEnclosureStateContext>(INITIAL_STATE);
export const EnclosureActionContext =
    createContext<IEnclosureActionContext>(undefined);
