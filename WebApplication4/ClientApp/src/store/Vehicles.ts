import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface VehiclesState {
    isLoading: boolean;
    startDateIndex?: number;
    Vehicle: Vehicles[];
}

export interface Vehicles {
    id: number;
    vehicleType: string;
    vehicleMake: string;
    vehicleModel: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestVehiclesAction {
    type: 'REQUEST_VEHICLES';
    startDateIndex: number;
}

interface ReceiveVehiclesAction {
    type: 'RECEIVE_VEHICLES';
    startDateIndex: number;
    Vehicle: Vehicles[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestVehiclesAction | ReceiveVehiclesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestVehicles: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Vehicles && startDateIndex !== appState.Vehicles.startDateIndex) {
            fetch(`api/Vehicles/Index`)
                .then(response => response.json() as Promise<Vehicles[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_VEHICLES', startDateIndex: startDateIndex, Vehicle: data });
                });

            dispatch({ type: 'REQUEST_VEHICLES', startDateIndex: startDateIndex });
        }
    },
    addVehicles: (type: string, year: number, make: string, model: string, radius: string, vin: string, primaryDriver: string, occassionDriver: string, listPrice: number, classs: string, weight: string): AppThunkAction<KnownAction> => (dispatch) => {
        console.log(make);
        fetch(`api/Vehicles/addVehicle/` + type + `/` + year + `/` + make + `/` + model + `/` + radius + `/` + vin + `/` + primaryDriver + `/` + occassionDriver + `/` + listPrice + `/` + classs + `/` + weight, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ type: type, year: year, make: make, model: model, radius: radius, vin: vin, primaryDriver: primaryDriver, occassionDriver: occassionDriver, listPrice: listPrice, classs: classs, weight: weight })
        }).
            then(response => console.log(response));
    },
    removeVehicles: (id: number): AppThunkAction<KnownAction> => (dispatch) => {
        fetch(`api/Vehicles/removeVehicle/` + id, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        }).then();
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: VehiclesState = { Vehicle: [], isLoading: false };

export const reducer: Reducer<VehiclesState> = (state: VehiclesState | undefined, incomingAction: Action): VehiclesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_VEHICLES':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                Vehicle: state.Vehicle,
                isLoading: true
            };
        case 'RECEIVE_VEHICLES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    Vehicle: action.Vehicle,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


