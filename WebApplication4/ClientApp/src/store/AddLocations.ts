import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface AddLocationsState {
    isLoading: boolean;
    startDateIndex?: number;
    AddLocation: AddLocations[];
}

export interface AddLocations {
    id: number;
    clientId: number;
    buildingType: string;
    street: string;
    city: string;
    postalCode: string;
    province: string;
    primaryOp: string;
    buildingConstr: string;
    wallConstr: string;
    floorConstr: string;
    sprinklered: string;
    deckConstruction: string;
    roofCovering: string;
    sizeSqft: number;
    storeysNumber: number;
    yearBuilt: number;
    constrType: string;
    alarm: string;
    mortgage: string;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestAddLocationsAction {
    type: 'REQUEST_ADD_LOCATIONS';
    startDateIndex: number;
}

interface ReceiveAddLocationsAction {
    type: 'RECEIVE_ADD_LOCATIONS';
    startDateIndex: number;
    AddLocation: AddLocations[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestAddLocationsAction | ReceiveAddLocationsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestAddLocations: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.AddLocations && startDateIndex !== appState.AddLocations.startDateIndex) {
            fetch(`api/ClientBuildingInfo/GetAddLocation`)
                .then(response => response.json() as Promise<AddLocations[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ADD_LOCATIONS', startDateIndex: startDateIndex, AddLocation: data });
                });

            dispatch({ type: 'REQUEST_ADD_LOCATIONS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: AddLocationsState = { AddLocation: [], isLoading: false };

export const reducer: Reducer<AddLocationsState> = (state: AddLocationsState | undefined, incomingAction: Action): AddLocationsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ADD_LOCATIONS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                AddLocation: state.AddLocation,
                isLoading: true
            };
        case 'RECEIVE_ADD_LOCATIONS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    AddLocation: action.AddLocation,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


