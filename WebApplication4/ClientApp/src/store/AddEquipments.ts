import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface AddEquipmentsState {
    isLoading: boolean;
    startDateIndex?: number;
    AddEquipment: AddEquipments[];
}

export interface AddEquipments {
    id: number;
    clientId: number;
    year: number;
    make: string;
    model: string;
    value: number;
    requestTime: Date;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestAddEquipmentsAction {
    type: 'REQUEST_ADD_EQUIPMENTS';
    startDateIndex: number;
}

interface ReceiveAddEquipmentsAction {
    type: 'RECEIVE_ADD_EQUIPMENTS';
    startDateIndex: number;
    AddEquipment: AddEquipments[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestAddEquipmentsAction | ReceiveAddEquipmentsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestAddEquipments: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.AddEquipments && startDateIndex !== appState.AddEquipments.startDateIndex) {
            fetch(`api/Equipments/GetAddEquipment`)
                .then(response => response.json() as Promise<AddEquipments[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_ADD_EQUIPMENTS', startDateIndex: startDateIndex, AddEquipment: data });
                });

            dispatch({ type: 'REQUEST_ADD_EQUIPMENTS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: AddEquipmentsState = { AddEquipment: [], isLoading: false };

export const reducer: Reducer<AddEquipmentsState> = (state: AddEquipmentsState | undefined, incomingAction: Action): AddEquipmentsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ADD_EQUIPMENTS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                AddEquipment: state.AddEquipment,
                isLoading: true
            };
        case 'RECEIVE_ADD_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    AddEquipment: action.AddEquipment,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


