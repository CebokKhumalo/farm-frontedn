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
    IPerson,
    PersonActionContext,
    PersonContext,
} from './context';
import {
    loginUserRequestAction,
    createPersonRequestAction,
    getAllPersonRequestAction,
    getPersonByIdRequestAction,
    //getPersonRequestAction,
} from './actions';
import axios from 'axios';
import router from 'next/router';

const PersonProvider: FC<PropsWithChildren<any>> = ({ children }) => {
    const [state, dispatch] = useReducer(PersonReducer, INITIAL_STATE);

    const getAllUser = async () => {
        try {
            // const token = localStorage.getItem('token');
            const response = await axios.get(
                'https://localhost:44311/api/services/app/Person/GetAll',
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            // Extract enclosure data from the response and update the state
            const data = response.data;
            dispatch(getAllPersonRequestAction(data.result));

            const user = data.result;
            if (user != null) {
                const userId = user?.id;
                router.push(`/userPage?id=${userId}`);
            } else {
                window.alert(
                    'Credentials incorrect. Please re-enter your credentials.'
                );
            }
            console.log('Fetch', data.result);
        } catch (error) {
            console.log(error);
        }
    };

    const createUser = async (userCreateInfo: IPerson) => {
        try {
            const response = await axios.post(
                `https://localhost:44311/api/services/app/Person/Create`,
                userCreateInfo,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data;
            dispatch(createPersonRequestAction(data.result));
            console.log('New employee created:', data.result);
        } catch (error) {
            console.log(error);
        }
    };
    const getUserByCredentials = async (
        emailOrEmail: string,
        password: string
    ) => {
        try {
            const response = await axios.get(
                `https://localhost:44311/api/services/app/Person/GetAsyncByUsenameOrEmailAndPassword?userNameOrEmail=${emailOrEmail}&password=${password}`
            );

            const data = response.data;
            dispatch(loginUserRequestAction(data.result));
            console.log('login data', data.result);

            const user = data.result;

            if (user) {
                const userId = user.id;
                localStorage.setItem('userId', userId);
                router.push(`/userPage?id=${userId}`);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getUserById = async (userId: string) => {
        try {
            const response = await axios.get(
                `https://localhost:44311/api/services/app/Person/Get?id=${userId}`
            );
            const data = response.data;
            dispatch(getPersonByIdRequestAction(data.result)); // Assuming you have this action
            console.log('Fetched user data', data.result);
        } catch (error) {
            console.log(error);
        }

        /*  const createUser = async (userRegInfo: IPerson) => {
        const token = localStorage.getItem('token');
        await fetch('https://localhost:44311/api/services/app/Person/Create', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer  ${token}`,
            },
            body: JSON.stringify(userRegInfo),
        }).then((res) => {
            res.json().then((data) => {
                dispatch(createPersonRequestAction(userRegInfo));
            });
        });
    };*/
    };
    return (
        <PersonContext.Provider value={state}>
            <PersonActionContext.Provider
                value={{
                    createUser,
                    getAllUser,
                    getUserByCredentials,
                    getUserById,
                }}
            >
                {children}
            </PersonActionContext.Provider>
        </PersonContext.Provider>
    );
};

const usePersonState = () => {
    const context = useContext(PersonContext);

    if (!context) {
        throw new Error('no people found');
    }
    return context;
};

const usePersonAction = () => {
    const context = useContext(PersonActionContext);

    if (context === undefined) {
        throw new Error('no people found');
    }
    return context;
};

const usePerson = () => {
    return {
        ...usePersonState(),
        ...usePersonAction(),
    };
};

export { PersonProvider, usePerson };
