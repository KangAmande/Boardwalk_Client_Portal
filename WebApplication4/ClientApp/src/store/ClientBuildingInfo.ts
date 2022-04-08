import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface ClientBuildingInfoState {
    isLoading: boolean;
    startDateIndex?: number;
    ClientBuildingInfo: ClientBuildingInfo[];
}

export interface ClientBuildingInfo {
    id: number;
    street: String;
    isActive: boolean;
    createdBy: string;
    city:string;
    postalCode:string;
    primaryOperation:string;
}

interface RequestClientBuildingInfoAction {
    type: 'REQUEST_CLIENTBUILDINGINFO';
    startDateIndex: number;
}

interface ReceiveClientBuildingInfoAction {
    type: 'RECEIVE_CLIENTBUILDINGINFO';
    startDateIndex: number;
    ClientBuildingInfo: ClientBuildingInfo[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestClientBuildingInfoAction | ReceiveClientBuildingInfoAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestClientBuildingInfo: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.ClientBuildingInfo && startDateIndex !== appState.ClientBuildingInfo.startDateIndex) {
            fetch(`api/ClientBuildingInfo/Index`)
                .then(response => response.json() as Promise<ClientBuildingInfo[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_CLIENTBUILDINGINFO', startDateIndex: startDateIndex, ClientBuildingInfo: data });
                });

            dispatch({ type: 'REQUEST_CLIENTBUILDINGINFO', startDateIndex: startDateIndex });
        }
    },
    addLocations: (buildingType: string, street: string, city: string, postalCode: string, province: string, primaryOp: string, buildingConstr: string, wallConstr: string,
        floorConstr: string, sprinklered: string, deckConstr: string, roofCovering: string, sizeSqft: number, storeyNumber: number, yearBuilt: number, constrType: string, alarm: string, mortgage: string):
        AppThunkAction<KnownAction> => (dispatch) => {
            console.log(buildingType);
            fetch(`api/ClientBuildingInfo/addLocation/` + buildingType + `/` + street + `/` + city + `/` + postalCode + `/` + province +`/`+ primaryOp + `/` + buildingConstr + `/` + wallConstr + `/` + floorConstr + `/` + sprinklered + `/`
                + deckConstr + `/` + roofCovering + `/` + sizeSqft + `/` + storeyNumber + `/` + yearBuilt + `/` + constrType + `/` + alarm + `/` + mortgage, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({
                    buildingType: buildingType, street: street, city: city, postalCode: postalCode, province: province, primaryOp: primaryOp, buildingConstr: buildingConstr, wallConstr: wallConstr,
                    floorConstr: floorConstr, sprinklered: sprinklered, deckConstr: deckConstr, roofCovering: roofCovering, sizeSqft: sizeSqft, storeyNumber: storeyNumber, yearBuilt: yearBuilt, constrType: constrType, alarm: alarm, mortgage: mortgage })
        }).
            then(response => console.log(response));
        },
    removeLocation: (id: number): AppThunkAction<KnownAction> => (dispatch) => {
        fetch(`api/ClientBuildingInfo/removeLocation/` + id, {
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

const unloadedState: ClientBuildingInfoState = { ClientBuildingInfo: [], isLoading: false };

export const reducer: Reducer<ClientBuildingInfoState> = (state: ClientBuildingInfoState | undefined, incomingAction: Action): ClientBuildingInfoState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_CLIENTBUILDINGINFO':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                ClientBuildingInfo: state.ClientBuildingInfo,
                isLoading: true
            };
        case 'RECEIVE_CLIENTBUILDINGINFO':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    ClientBuildingInfo: action.ClientBuildingInfo,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};

