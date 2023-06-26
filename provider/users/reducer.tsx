import { PersonActionEnum } from './actions';
import { IPersonStateContext } from './context';

export function PersonReducer(
    incomingState: IPersonStateContext,
    action: ReduxActions.Action<IPersonStateContext>
): IPersonStateContext {
    const { type, payload } = action;

    switch (type) {
        case PersonActionEnum.getAllPersonRequest:
        case PersonActionEnum.createPersonRequest:
        case PersonActionEnum.loginUserRequest:
        case PersonActionEnum.getPersonByIdRequest:
            return { ...incomingState, ...payload };

        default:
            incomingState;
    }
}
