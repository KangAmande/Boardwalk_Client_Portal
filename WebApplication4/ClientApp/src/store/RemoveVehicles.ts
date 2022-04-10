import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface RemoveVehiclesState {
    isLoading: boolean;
    startDateIndex?: number;
    RemoveVehicle: RemoveVehicles[];
}
export interface RemoveClientVehiclesState {
    isLoading: boolean;
    startDateIndex?: number;
    ClientRemoveVehicle: RemoveVehicles[];
}
export interface RemoveVehicles {
    id: number;
    clientId: number;
    vehicleId: number;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestRemoveVehiclesAction {
    type: 'REQUEST_REMOVE_VEHICLES';
    startDateIndex: number;
}

interface ReceiveRemoveVehiclesAction {
    type: 'RECEIVE_REMOVE_VEHICLES';
    startDateIndex: number;
    RemoveVehicle: RemoveVehicles[];
}
interface RequestClientRemoveVehiclesAction {
    type: 'REQUEST_REMOVE_CLIENT_VEHICLES';
    startDateIndex: number;
}

interface ReceiveClientRemoveVehiclesAction {
    type: 'RECEIVE_REMOVE_CLIENT_VEHICLES';
    startDateIndex: number;
    ClientRemoveVehicle: RemoveVehicles[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestRemoveVehiclesAction | ReceiveRemoveVehiclesAction;
type ClientKnownAction = RequestClientRemoveVehiclesAction | ReceiveClientRemoveVehiclesAction;
// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestRemoveVehicles: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.RemoveVehicles && startDateIndex !== appState.RemoveVehicles.startDateIndex) {
            fetch(`api/Vehicles/GetRemoveVehicle`)
                .then(response => response.json() as Promise<RemoveVehicles[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_REMOVE_VEHICLES', startDateIndex: startDateIndex, RemoveVehicle: data });
                });

            dispatch({ type: 'REQUEST_REMOVE_VEHICLES', startDateIndex: startDateIndex });
        }
    }
};
export const clientActionCreators = {
    requestClientRemoveVehicles: (startDateIndex: number): AppThunkAction<ClientKnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.ClientRemoveVehicles && startDateIndex !== appState.ClientRemoveVehicles.startDateIndex) {
            fetch(`api/Vehicles/ClientRemoveVehicle`)
                .then(response => response.json() as Promise<RemoveVehicles[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_REMOVE_CLIENT_VEHICLES', startDateIndex: startDateIndex, ClientRemoveVehicle: data });
                });

            dispatch({ type: 'REQUEST_REMOVE_CLIENT_VEHICLES', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: RemoveVehiclesState = { RemoveVehicle: [], isLoading: false };
const clientUnloadedState: RemoveClientVehiclesState = { ClientRemoveVehicle: [], isLoading: false };
export const reducer: Reducer<RemoveVehiclesState> = (state: RemoveVehiclesState | undefined, incomingAction: Action): RemoveVehiclesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_VEHICLES':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                RemoveVehicle: state.RemoveVehicle,
                isLoading: true
            };
        case 'RECEIVE_REMOVE_VEHICLES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    RemoveVehicle: action.RemoveVehicle,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
export const clientReducer: Reducer<RemoveClientVehiclesState> = (state: RemoveClientVehiclesState | undefined, incomingAction: Action): RemoveClientVehiclesState => {
    if (state === undefined) {
        return clientUnloadedState;
    }

    const action = incomingAction as ClientKnownAction;
    switch (action.type) {
        case 'REQUEST_REMOVE_CLIENT_VEHICLES':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                ClientRemoveVehicle: state.ClientRemoveVehicle,
                isLoading: true
            };
        case 'RECEIVE_REMOVE_CLIENT_VEHICLES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    ClientRemoveVehicle: action.ClientRemoveVehicle,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};

