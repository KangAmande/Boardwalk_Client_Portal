import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AccountsState {
    isLoading: boolean;
    Account: Accounts[];
    startDateIndex?: number;
}

export interface Accounts {
    id: number;
    accountNumber: String;
    businessType: number;
    clientType: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestAccountsAction {
    type: 'REQUEST_ACCOUNTS';
    startDateIndex?: number;
}

interface ReceiveAcountsAction {
    type: 'RECEIVE_ACCOUNT';
    Account: Accounts[];
    startDateIndex?: number;
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestAccountsAction | ReceiveAcountsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestAccounts: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Accounts && startDateIndex !== appState.Accounts.startDateIndex) {
            fetch(`api/ClientInfos/Index`)
                .then(response => response.json() as Promise<Accounts[]>)
                .then(data => {
                    console.log(JSON.stringify(data));
                    dispatch({ type: 'RECEIVE_ACCOUNT', startDateIndex: startDateIndex, Account: data });
                });

            dispatch({ type: 'REQUEST_ACCOUNTS', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: AccountsState = { Account: [], isLoading: false };

export const reducer: Reducer<AccountsState> = (state: AccountsState | undefined, incomingAction: Action): AccountsState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_ACCOUNTS':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                Account: state.Account,
                isLoading: true
            };
        case 'RECEIVE_ACCOUNT':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    Account: action.Account,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
