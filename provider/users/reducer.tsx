import { PersonActionEnum } from './actions';
import { IPersonStateContext } from './context';

export function PersonReducer(
    incomingState: IPersonStateContext,
    action: ReduxActions.Action<IPersonStateContext>
): IPersonStateContext {
    const { type, payload } = action;

    switch (type) {
        case PersonActionEnum.loginUserRequest:
        case PersonActionEnum.createPersonRequest:
        case PersonActionEnum.getAllPersonRequest:
            return { ...incomingState, ...payload };

        default:
            incomingState;
    }
}
