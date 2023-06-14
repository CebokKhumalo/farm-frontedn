import React, {
    FC,
    PropsWithChildren,
    useReducer,
    useContext,
    useState,
} from 'react';
import { PersonReducer } from './reducer';
import {
    ILogin,
    INITIAL_STATE,
    IPerson,
    PersonActionContext,
    PersonContext,
} from './context';
import {
    loginUserRequestAction,
    createPersonRequestAction,
    getAllPersonRequestAction,
} from './actions';

const PersonProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [state, dispatch] = useReducer(PersonReducer, INITIAL_STATE);

    const getPerson = async () => {
        const token = localStorage.getItem('token');
        const response = await fetch(
            'https://localhost:44311/api/services/app/Person/GetAll',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            dispatch(getAllPersonRequestAction(data.result));
            console.log('Fetch', data.result);
        } else if (response.status === 401) {
            // Unauthorized access
            window.alert('Unauthorized access. Please log in again.');
            // window.location.href = '/login';
        } else {
            // Other errors
            window.alert('Failed to fetch persons.');
        }
    };

    const createUser = async (userRegInfo: IPerson) => {
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
    };

    return (
        <PersonContext.Provider value={state}>
            <PersonActionContext.Provider value={{ createUser, getPerson }}>
                {children}
            </PersonActionContext.Provider>
        </PersonContext.Provider>
    );
};
