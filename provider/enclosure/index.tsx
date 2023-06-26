import React, {
    FC,
    PropsWithChildren,
    useReducer,
    useContext,
    useState,
} from 'react';
import { PersonReducer } from './reducer';
import {
    /*ILogin,*/
    INITIAL_STATE,
    IEnclosure,
    EnclosureActionContext,
    EnclosureContext,
} from './context';
import {
    createEnclosureRequestAction,
    getAllEnclosureRequestAction,
    getEnclosureByIdRequestAction,
} from './actions';
import axios from 'axios';
import router from 'next/router';
import jwt from 'jsonwebtoken';

const EnclosureProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(PersonReducer, INITIAL_STATE);

    const getAllEnclosure = async () => {
        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(
                'https://localhost:44311/api/services/app/Enclosure/GetAllEnclosure',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            const data = response.data;
            dispatch(getAllEnclosureRequestAction(data.result));
            console.log('Fetch', data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const createEnclosure = async (EnclosureCreateInfo: IEnclosure) => {
        try {
            const response = await axios.post(
                `https://localhost:44311/api/services/app/Enclosure/CreateEnclosure`,
                EnclosureCreateInfo,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data;
            dispatch(createEnclosureRequestAction(data.result));
            console.log('New employee created:', data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const getEnclosureById = async (enclosureId: string) => {
        try {
            const response = await axios.get(
                `https://localhost:44311/api/services/app/Enclosure/GetEnclosure?id=${enclosureId}`
            );
            const data = response.data;
            dispatch(getEnclosureByIdRequestAction(data.result)); // Assuming you have this action
            console.log('Fetched user data', data.result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <EnclosureContext.Provider value={state}>
            <EnclosureActionContext.Provider
                value={{
                    createEnclosure,
                    getAllEnclosure,
                    getEnclosureById,
                }}
            >
                {children}
            </EnclosureActionContext.Provider>
        </EnclosureContext.Provider>
    );
};

const useEnclosureState = () => {
    const context = useContext(EnclosureContext);

    if (!context) {
        throw new Error('no people found');
    }
    return context;
};

const useEnclosureAction = () => {
    const context = useContext(EnclosureActionContext);

    if (context === undefined) {
        throw new Error('no people found');
    }
    return context;
};

const useEnclosure = () => {
    return {
        ...useEnclosureState(),
        ...useEnclosureAction(),
    };
};

export { EnclosureProvider, useEnclosure };
