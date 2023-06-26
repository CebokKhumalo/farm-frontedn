import { createAction } from 'redux-actions';
import { IPerson, IPersonStateContext /*ILogin*/ } from './context';

export enum PersonActionEnum {
    loginUserRequest = 'LOGIN',
    createPersonRequest = 'CREATE',
    getAllPersonRequest = 'GETALL',
    getPersonByIdRequest = 'GET',
}

export const loginUserRequestAction = createAction<
    IPersonStateContext,
    IPerson
>(PersonActionEnum.loginUserRequest, (UserLoggedIn) => ({ UserLoggedIn }));

export const createPersonRequestAction = createAction<
    IPersonStateContext,
    IPerson
>(PersonActionEnum.createPersonRequest, (UserCreated) => ({ UserCreated }));

export const getAllPersonRequestAction = createAction<
    IPersonStateContext,
    IPerson[]
>(PersonActionEnum.getAllPersonRequest, (AllUser) => ({ AllUser }));

export const getPersonByIdRequestAction = createAction<IPersonStateContext, IPerson>(
    PersonActionEnum.getPersonByIdRequest,
    (GetPerson) => ({})
);
