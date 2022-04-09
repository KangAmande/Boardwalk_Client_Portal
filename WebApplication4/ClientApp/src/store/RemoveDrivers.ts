import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface RemoveDriversState {
    isLoading: boolean;
    startDateIndex?: number;
    RemoveDriver: RemoveDrivers[];
}

export interface RemoveDrivers {
    id: number;
    clientId: number;
    driverId: number;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestRemoveDriversAction {
    type: 'REQUEST_REMOVE_DRIVERS';
    startDateIndex: number;
}

interface ReceiveRemoveDriversAction {
    type: 'RECEIVE_REMOVE_DRIVERS';
    startDateIndex: number;
    RemoveDriver: RemoveDrivers[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestRemoveDriversAction | ReceiveRemoveDriversAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRemoveDrivers: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.RemoveDrivers && startDateIndex !== appState.RemoveDrivers.startDateIndex) {
            fetch(`api/Drivers/GetRemoveDriver`)
                .then(response => response.json() as Promise<RemoveDrivers[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_REMOVE_DRIVERS', startDateIndex: startDateIndex, RemoveDriver: data });
                });

            dispatch({ type: 'REQUEST_REMOVE_DRIVERS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RemoveDriversState = { RemoveDriver: [], isLoading: false };

export const reducer: Reducer<RemoveDriversState> = (state: RemoveDriversState | undefined, incomingAction: Action): RemoveDriversState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_DRIVERS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                RemoveDriver: state.RemoveDriver,
                isLoading: true
            };
        case 'RECEIVE_REMOVE_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    RemoveDriver: action.RemoveDriver,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


