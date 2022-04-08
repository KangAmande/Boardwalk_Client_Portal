import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface EquipmentsState {
    isLoading: boolean;
    startDateIndex?: number;
    Equipment: Equipments[];
}

export interface Equipments {
    id: number;
    make: string;
    model: string;
    year: number;
    serialNumber: string;
    value: DoubleRange;
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
    Equipment: Equipments[];
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
                    dispatch({ type: 'RECEIVE_EQUIPMENTS', startDateIndex: startDateIndex, Equipment: data });
                });

            dispatch({ type: 'REQUEST_EQUIPMENTS', startDateIndex: startDateIndex });
        }
    },
    addEquipments: (year: number, make: string, model: string, value: number, serialN: string): AppThunkAction<KnownAction> => (dispatch) => {
        console.log(make);
        fetch(`api/Equipments/addEquipment/` + year + `/` + make + `/` + model + `/` + value + `/` + serialN, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year: year, make: make, model: model, value: value, serialN: serialN })
        }).
            then(response => console.log(response));
    },
    removeEquipment: (id: number): AppThunkAction<KnownAction> => (dispatch) => {
        fetch(`api/Equipments/removeEquipment/` + id, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id:id })
        }).then();
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: EquipmentsState = { Equipment: [], isLoading: false };

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
                Equipment: state.Equipment,
                isLoading: true
            };
        case 'RECEIVE_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    Equipment: action.Equipment,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


