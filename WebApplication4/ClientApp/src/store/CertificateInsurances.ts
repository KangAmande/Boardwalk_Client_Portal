import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface CertificateInsurancesState {
    isLoading: boolean;
    startDateIndex?: number;
    CI: CertificateInsurances[];
}

export interface CertificateInsurances {
    id: number;
    clientId: number;
    holderName: string;
    insuranceType: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestCertificateInsurancesAction {
    type: 'REQUEST_CERTIFICATEINSURANCES';
    startDateIndex: number;
}

interface ReceiveCertificateInsurancesAction {
    type: 'RECEIVE_CERTIFICATEINSURANCES';
    startDateIndex: number;
    CI: CertificateInsurances[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestCertificateInsurancesAction | ReceiveCertificateInsurancesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestCertificateInsurances: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.CertificateInsurances && startDateIndex !== appState.CertificateInsurances.startDateIndex) {
            fetch(`api/CertificateInsurances/Index`)
                .then(response => response.json() as Promise<CertificateInsurances[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_CERTIFICATEINSURANCES', startDateIndex: startDateIndex, CI: data });
                });

            dispatch({ type: 'REQUEST_CERTIFICATEINSURANCES', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: CertificateInsurancesState = { CI: [], isLoading: false };

export const reducer: Reducer<CertificateInsurancesState> = (state: CertificateInsurancesState | undefined, incomingAction: Action): CertificateInsurancesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_CERTIFICATEINSURANCES':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                CI: state.CI,
                isLoading: true
            };
        case 'RECEIVE_CERTIFICATEINSURANCES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    CI: action.CI,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
