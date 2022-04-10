import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface AddDriversState {
    isLoading: boolean;
    startDateIndex?: number;
    AddDriver: AddDrivers[];
}
export interface ClientAddDriversState {
    isLoading: boolean;
    startDateIndex?: number;
    ClientAddDriver: AddDrivers[];
}
export interface AddDrivers {
    id: number;
    clientId: number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    driverTrain: string;
    licenseNumber: string;
    conviction: string;
    licenseYear: number;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestAddDriversAction {
    type: 'REQUEST_ADD_DRIVERS';
    startDateIndex: number;
}

interface ReceiveAddDriversAction {
    type: 'RECEIVE_ADD_DRIVERS';
    startDateIndex: number;
    AddDriver: AddDrivers[];
}
interface RequestClientAddDriversAction {
    type: 'REQUEST_ADD_CLIENT_DRIVERS';
    startDateIndex: number;
}

interface ReceiveClientAddDriversAction {
    type: 'RECEIVE_ADD_CLIENT_DRIVERS';
    startDateIndex: number;
    ClientAddDriver: AddDrivers[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestAddDriversAction | ReceiveAddDriversAction;
type ClientKnownAction = RequestClientAddDriversAction | ReceiveClientAddDriversAction;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestAddDrivers: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.AddDrivers && startDateIndex !== appState.AddDrivers.startDateIndex) {
            fetch(`api/Drivers/GetAddDriver`)
                .then(response => response.json() as Promise<AddDrivers[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ADD_DRIVERS', startDateIndex: startDateIndex, AddDriver: data });
                });

            dispatch({ type: 'REQUEST_ADD_DRIVERS', startDateIndex: startDateIndex });
        }
    }
};
export const clientActionCreators = {
    requestClientAddDrivers: (startDateIndex: number): AppThunkAction<ClientKnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.ClientAddDrivers && startDateIndex !== appState.ClientAddDrivers.startDateIndex) {
            fetch(`api/Drivers/ClientAddDriver`)
                .then(response => response.json() as Promise<AddDrivers[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ADD_CLIENT_DRIVERS', startDateIndex: startDateIndex, ClientAddDriver: data });
                });

            dispatch({ type: 'REQUEST_ADD_CLIENT_DRIVERS', startDateIndex: startDateIndex });
        }
    }
};
// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: AddDriversState = { AddDriver: [], isLoading: false };
const clientUnloadedState: ClientAddDriversState = { ClientAddDriver: [], isLoading: false };

export const reducer: Reducer<AddDriversState> = (state: AddDriversState | undefined, incomingAction: Action): AddDriversState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ADD_DRIVERS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                AddDriver: state.AddDriver,
                isLoading: true
            };
        case 'RECEIVE_ADD_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    AddDriver: action.AddDriver,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
export const clientReducer: Reducer<ClientAddDriversState> = (state: ClientAddDriversState | undefined, incomingAction: Action): ClientAddDriversState => {
    if (state === undefined) {
        return clientUnloadedState;
    }

    const action = incomingAction as ClientKnownAction;
    switch (action.type) {
        case 'REQUEST_ADD_CLIENT_DRIVERS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                ClientAddDriver: state.ClientAddDriver,
                isLoading: true
            };
        case 'RECEIVE_ADD_CLIENT_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    ClientAddDriver: action.ClientAddDriver,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


