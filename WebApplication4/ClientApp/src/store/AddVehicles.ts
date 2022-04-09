import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface AddVehiclesState {
    isLoading: boolean;
    startDateIndex?: number;
    AddVehicle: AddVehicles[];
}

export interface AddVehicles {
    id: number;
    clientId: number;
    type: string;
    year: number;
    make: string;
    model: string;
    radius: string;
    vin: string;
    primaryDriver: string;
    occassionDriver: string;
    listPrice: number;
    class: string;
    weight: string;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestAddVehiclesAction {
    type: 'REQUEST_ADD_VEHICLES';
    startDateIndex: number;
}

interface ReceiveAddVehiclesAction {
    type: 'RECEIVE_ADD_VEHICLES';
    startDateIndex: number;
    AddVehicle: AddVehicles[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestAddVehiclesAction | ReceiveAddVehiclesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestAddVehicles: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.AddVehicles && startDateIndex !== appState.AddVehicles.startDateIndex) {
            fetch(`api/Vehicles/GetAddVehicle`)
                .then(response => response.json() as Promise<AddVehicles[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ADD_VEHICLES', startDateIndex: startDateIndex, AddVehicle: data });
                });

            dispatch({ type: 'REQUEST_ADD_VEHICLES', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: AddVehiclesState = { AddVehicle: [], isLoading: false };

export const reducer: Reducer<AddVehiclesState> = (state: AddVehiclesState | undefined, incomingAction: Action): AddVehiclesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ADD_VEHICLES':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                AddVehicle: state.AddVehicle,
                isLoading: true
            };
        case 'RECEIVE_ADD_VEHICLES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    AddVehicle: action.AddVehicle,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


