import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface EquipmentsState {
    isLoading: boolean;
    startDateIndex?: number;
    Equipments: Equipments[];
}

export interface Equipments {
    id:number;
    clientId: number;
    make:string;
    model:string;
    year:number;
    serialNumber:number;
    value:number;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestEquipmentsAction {
    type: 'REQUEST_EQUIPMENTS';
    startDateIndex: number;
}

interface ReceiveEquipmentsAction {
    type: 'RECEIVE_EQUIPMENTS';
    startDateIndex: number;
    Equipments: Equipments[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestEquipmentsAction | ReceiveEquipmentsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestEquipments: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Equipments && startDateIndex !== appState.Equipments.startDateIndex) {
            fetch(`api/Equipments/Index`)
                .then(response => response.json() as Promise<Equipments[]>)
                .then(data => {
                    console.log(JSON.stringify(data));
                    dispatch({ type: 'RECEIVE_EQUIPMENTS',startDateIndex: startDateIndex, Equipments: data });
                });

            dispatch({ type: 'REQUEST_EQUIPMENTS',startDateIndex: startDateIndex});
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: EquipmentsState = { Equipments: [], isLoading: false };

export const reducer: Reducer<EquipmentsState> = (state: EquipmentsState | undefined, incomingAction: Action): EquipmentsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_EQUIPMENTS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                Equipments: state.Equipments,
                isLoading: true
            };
        case 'RECEIVE_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex){
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                Equipments: action.Equipments,
                isLoading: false
            };
        }
        break;
           
    }
    return state;
};
