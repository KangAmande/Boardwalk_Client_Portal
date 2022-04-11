import { Action, Reducer } from 'redux';
import { AppThunkAction } from './';

export interface FilesState {
    isLoading: boolean;
    startDateIndex?: number;
    File: Files[];
}

export interface Files {
    id: number;
    name: string;
    providerName: string;
    createdBy: string;
    modifiedBy: string;
    sizeMb: number;
    insurerId: number;
    certificateId: number;
    bindingId: number;

}

// -----------------www
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.

interface RequestFilesAction {
    type: 'REQUEST_FILES';
    startDateIndex: number;
}

interface ReceiveFilesAction {
    type: 'RECEIVE_FILES';
    startDateIndex: number;
    File: Files[];
}

// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
type KnownAction = RequestFilesAction | ReceiveFilesAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    requestFiles: (startDateIndex: number): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        if (appState && appState.Files && startDateIndex !== appState.Files.startDateIndex) {
            fetch(`api/Files/Index`)
                .then(response => response.json() as Promise<Files[]>)
                .then(data => {
                    dispatch({ type: 'RECEIVE_FILES', startDateIndex: startDateIndex, File: data });
                });

            dispatch({ type: 'REQUEST_FILES', startDateIndex: startDateIndex });
        }
    }
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

const unloadedState: FilesState = { File: [], isLoading: false };

export const reducer: Reducer<FilesState> = (state: FilesState | undefined, incomingAction: Action): FilesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_FILES':
            return {
                startDateIndex: action.startDateIndex,
                ...state,
                File: state.File,
                isLoading: true
            };
        case 'RECEIVE_FILES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.startDateIndex === state.startDateIndex) {
                return {
                    startDateIndex: action.startDateIndex,
                    ...state,
                    File: action.File,
                    isLoading: false
                };
            }
            break;
    }
    return state;
};
