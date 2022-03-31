import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface DriversState {
    isLoading: boolean;
    startDateIndex?: number;
    Driver: Drivers[];
}

export interface Drivers {
    id:number;
    clientId: number;
    submissionId: number;
    coveragedId: number;
    fullName:string;
    driverLicense: string;
    birthdate: Date;
    licenseYear: number;
    driverTrain: string;
    conviction: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestDriversAction {
    type: 'REQUEST_DRIVERS';
    startDateIndex: number;
}

interface ReceiveDriversAction {
    type: 'RECEIVE_DRIVERS';
    startDateIndex: number;
    Driver: Drivers[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestDriversAction | ReceiveDriversAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestDrivers: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Drivers && startDateIndex !== appState.Drivers.startDateIndex) {
            fetch(`api/Drivers/Index`)
                .then(response => response.json() as Promise<Drivers[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_DRIVERS', startDateIndex: startDateIndex, Driver: data });
                });

            dispatch({ type: 'REQUEST_DRIVERS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: DriversState = { Driver: [], isLoading: false };

export const reducer: Reducer<DriversState> = (state: DriversState | undefined, incomingAction: Action): DriversState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_DRIVERS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                Driver: state.Driver,
                isLoading: true
            };
        case 'RECEIVE_DRIVERS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    Driver: action.Driver,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};

