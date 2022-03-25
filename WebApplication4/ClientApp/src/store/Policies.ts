import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface PoliciesState {
    isLoading: boolean;
    Policy: Policies[];
}

export interface Policies {
    Id: number;
    Description: String;
    IsActive: boolean;
    CreatedBy: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestPoliciesAction {
    type: 'REQUEST_POLICIES';
}

interface ReceivePoliciesAction {
    type: 'RECEIVE_POLICIES';
    Policy: Policies[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestPoliciesAction | ReceivePoliciesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestPolicies: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Policies) {
            fetch(`api/Policies/Index`)
                .then(response => response.json() as Promise<Policies[]>)
                .then(data => {
                    console.log(JSON.stringify(data));
                    dispatch({ type: 'RECEIVE_POLICIES', Policy: data });
                });

            dispatch({ type: 'REQUEST_POLICIES'});
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: PoliciesState = { Policy: [], isLoading: false };

export const reducer: Reducer<PoliciesState> = (state: PoliciesState | undefined, incomingAction: Action): PoliciesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_POLICIES':
            return {
                ...state,
                Policy: state.Policy,
                isLoading: true
            };
        case 'RECEIVE_POLICIES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                ...state,
                Policy: action.Policy,
                isLoading: false
            };
        default:
            return state;
    }
};
