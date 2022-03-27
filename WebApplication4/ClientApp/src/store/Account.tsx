import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface AccountsState {
    isLoading: boolean;
    Account: Accounts[];
}

export interface Accounts {
    Id: number;
    AccountNumber: String;
    BusinessType: number;
    ClientType: string;
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestAccountsAction {
    type: 'REQUEST_ACCOUNTS';
}

interface ReceiveAcountsAction {
    type: 'RECEIVE_ACCOUNT';
    Account: Accounts[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestAccountsAction | ReceiveAcountsAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestAccounts: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Policies) {
            fetch(`api/ClientInfos/Index`)
                .then(response => response.json() as Promise<Accounts[]>)
                .then(data => {
                    console.log(JSON.stringify(data));
                    dispatch({ type: 'RECEIVE_ACCOUNT', Account: data });
                });

            dispatch({ type: 'REQUEST_ACCOUNTS' });
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
                ...state,
                Account: state.Account,
                isLoading: true
            };
        case 'RECEIVE_ACCOUNT':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            return {
                ...state,
                Account: action.Account,
                isLoading: false
            };
        default:
            return state;
    }
};
