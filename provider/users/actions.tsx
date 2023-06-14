import { createAction } from 'redux-actions';
import { IPerson, IPersonStateContext, ILogin } from './context';

export enum PersonActionEnum {
    loginUserRequest = 'LOGIN',
    createPersonRequest = 'CREATE',
    getAllPersonRequest = 'GETALL',
}

export const loginUserRequestAction = createAction<IPersonStateContext, ILogin>(
    PersonActionEnum.loginUserRequest,
    (UserLogin) => ({ UserLogin })
);

export const createPersonRequestAction = createAction<
    IPersonStateContext,
    IPerson
>(PersonActionEnum.createPersonRequest, (CreateUser) => ({ CreateUser }));

export const getAllPersonRequestAction = createAction<
    IPersonStateContext,
    IPerson
>(PersonActionEnum.createPersonRequest, (GetAllUser) => ({ GetAllUser }));
