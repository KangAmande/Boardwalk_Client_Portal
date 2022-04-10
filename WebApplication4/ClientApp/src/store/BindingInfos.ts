import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface BindinginfosState {
    isLoading: boolean;
    startDateIndex?: number;
    Bindinginfo: Bindinginfos[];
}

export interface Bindinginfos {
    id: number;
    expiryDate: number;  
    effectiveDate: number; 
    dateOfCreate: number; 
    createdBy: string; 
    totalBoundPremimum: string;
}

// -----------------www
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestBindinginfosAction {
    type: 'REQUEST_BINDINGINFOS';
    startDateIndex: number;
}

interface ReceiveBindinginfosAction {
    type: 'RECEIVE_BINDINGINFOS';
    startDateIndex: number;
    Bindinginfo: Bindinginfos[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestBindinginfosAction | ReceiveBindinginfosAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestBindinginfos: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.BindingInfos && startDateIndex !== appState.BindingInfos.startDateIndex) {
            fetch(`api/BindingInfos/Index`)
                .then(response => response.json() as Promise<Bindinginfos[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_BINDINGINFOS', startDateIndex: startDateIndex, Bindinginfo: data });
                });

            dispatch({ type: 'REQUEST_BINDINGINFOS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: BindinginfosState = { Bindinginfo: [], isLoading: false };

export const reducer: Reducer<BindinginfosState> = (state: BindinginfosState | undefined, incomingAction: Action): BindinginfosState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_BINDINGINFOS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                Bindinginfo: state.Bindinginfo,
                isLoading: true
            };
        case 'RECEIVE_BINDINGINFOS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    Bindinginfo: action.Bindinginfo,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
