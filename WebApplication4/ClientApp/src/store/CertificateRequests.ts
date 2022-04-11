import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface CertificateRequestsState {
    isLoading: boolean;
    startDateIndex?: number;
    CertificateRequests: CertificateRequests[];
}

export interface CertificateRequests {
    id: number;
    Name: string;
    Street: string;
    City: number;
    PostalCode: string;
    Province: DoubleRange;
}
// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestCertificateRequestsAction {
    type: 'REQUEST_EQUIPMENTS';
    startDateIndex: number;
}

interface ReceiveCertificateRequestsAction {
    type: 'RECEIVE_EQUIPMENTS';
    startDateIndex: number;
    CertificateRequests: CertificateRequests[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestCertificateRequestsAction | ReceiveCertificateRequestsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCertificateRequests: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.CertificateRequests && startDateIndex !== appState.CertificateRequests.startDateIndex) {
            fetch(`api/CertificateRequests/Index`)
                .then(response => response.json() as Promise<CertificateRequests[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_EQUIPMENTS', startDateIndex: startDateIndex, CertificateRequests: data });
                });

            dispatch({ type: 'REQUEST_EQUIPMENTS', startDateIndex: startDateIndex });
        }
    }
    // ,
    // addCertificateRequests: (year: number, make: string, model: string, value: number, serialN: string): AppThunkAction<KnownAction> => (dispatch) => {
    //     console.log(make);
    //     fetch(`api/CertificateRequests/addCertificateRequests/` + year + `/` + make + `/` + model + `/` + value + `/` + serialN, {
    //         method: "post",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ year: year, make: make, model: model, value: value, serialN: serialN })
    //     }).
    //         then(response => console.log(response));
    // },
    // removeCertificateRequests: (id: number): AppThunkAction<KnownAction> => (dispatch) => {
    //     fetch(`api/CertificateRequests/removeCertificateRequests/` + id, {
    //         method: "post",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ id:id })
    //     }).then();
    // }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: CertificateRequestsState = { CertificateRequests: [], isLoading: false };

export const reducer: Reducer<CertificateRequestsState> = (state: CertificateRequestsState | undefined, incomingAction: Action): CertificateRequestsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_EQUIPMENTS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                CertificateRequests: state.CertificateRequests,
                isLoading: true
            };
        case 'RECEIVE_EQUIPMENTS':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    CertificateRequests: action.CertificateRequests,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};


