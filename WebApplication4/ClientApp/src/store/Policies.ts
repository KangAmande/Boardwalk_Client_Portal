import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface PoliciesState {
    isLoading: boolean;
    startDateIndex?: number;
    Policy: Policies[];
}

export interface Policies {
    id: number;
    description: string;
    isActive: string;
    createdBy: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestPoliciesAction {
    type: 'REQUEST_POLICIES';
    startDateIndex: number;
}

interface ReceivePoliciesAction {
    type: 'RECEIVE_POLICIES';
    startDateIndex: number;
    Policy: Policies[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestPoliciesAction | ReceivePoliciesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestPolicies: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Policies && startDateIndex !== appState.Policies.startDateIndex) {
            fetch(`api/Policies/Index`)
                .then(response => response.json() as Promise<Policies[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_POLICIES', startDateIndex: startDateIndex, Policy: data });
                });

            dispatch({ type: 'REQUEST_POLICIES', startDateIndex: startDateIndex});
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
                startDateIndex: action.startDateIndex,
                ...state,
                Policy: state.Policy,
                isLoading: true
            };
        case 'RECEIVE_POLICIES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    Policy: action.Policy,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
