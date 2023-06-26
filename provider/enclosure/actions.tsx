import { createAction } from 'redux-actions';
import { IEnclosure, IEnclosureStateContext /*ILogin*/ } from './context';

export enum PersonActionEnum {
    createEnclosureRequest = 'CREATE',
    getAllEnclosureRequest = 'GETALL',
    getEnclosureByIdRequest = 'GET',
}

export const createEnclosureRequestAction = createAction<
    IEnclosureStateContext,
    IEnclosure
>(PersonActionEnum.createEnclosureRequest, (EnclosurCreated) => ({
    EnclosurCreated,
}));

export const getAllEnclosureRequestAction = createAction<
    IEnclosureStateContext,
    IEnclosure[]
>(PersonActionEnum.getAllEnclosureRequest, (AllEnclosure) => ({
    AllEnclosure,
}));

export const getEnclosureByIdRequestAction = createAction<
    IEnclosureStateContext,
    IEnclosure
>(PersonActionEnum.getEnclosureByIdRequest, (EnclosureById) => ({}));
