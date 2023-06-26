import { PersonActionEnum } from './actions';
import { IEnclosureStateContext } from './context';

export function PersonReducer(
    incomingState: IEnclosureStateContext,
    action: ReduxActions.Action<IEnclosureStateContext>
): IEnclosureStateContext {
    const { type, payload } = action;

    switch (type) {
        case PersonActionEnum.createEnclosureRequest:
        case PersonActionEnum.getAllEnclosureRequest:
        case PersonActionEnum.getEnclosureByIdRequest:
            return { ...incomingState, ...payload };

        default:
            incomingState;
    }
}
