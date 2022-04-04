import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ClientBuildingInfoState {
    isLoading: boolean;
    ClientBuildingInfo: ClientBuildingInfo[];
}

export interface ClientBuildingInfo {
    Id: number;
    street: String;
    IsActive: boolean;
    CreatedBy: string;
    City:string;
    PostalCode:string;
    PrimaryOperation:string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestClientBuildingInfoAction {
    type: 'REQUEST_CLIENTBUILDINGINFO';
}

interface ReceiveClientBuildingInfoAction {
    type: 'RECEIVE_CLIENTBUILDINGINFO';
    ClientBuildingInfo: ClientBuildingInfo[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestClientBuildingInfoAction | ReceiveClientBuildingInfoAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestClientBuildingInfo: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.ClientBuildingInfo) {
            fetch(`api/ClientBuildingInfo/Index`)
                .then(response => response.json() as Promise<ClientBuildingInfo[]>)
                .then(data => {
                    console.log(JSON.stringify(data));
                    dispatch({ type: 'RECEIVE_CLIENTBUILDINGINFO', ClientBuildingInfo: data });
                });

            dispatch({ type: 'REQUEST_CLIENTBUILDINGINFO'});
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: ClientBuildingInfoState = { ClientBuildingInfo: [], isLoading: false };

export const reducer: Reducer<ClientBuildingInfoState> = (state: ClientBuildingInfoState | undefined, incomingAction: Action): ClientBuildingInfoState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_CLIENTBUILDINGINFO':
            return {
                ...state,
                ClientBuildingInfo: state.ClientBuildingInfo,
                isLoading: true
            };
        case 'RECEIVE_CLIENTBUILDINGINFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                ...state,
                ClientBuildingInfo: action.ClientBuildingInfo,
                isLoading: false
            };
        default:
            return state;
    }
};
