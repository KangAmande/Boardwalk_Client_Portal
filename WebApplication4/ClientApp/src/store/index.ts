import * as Policies from './Policies';
import * as Accounts from './Accounts';
import * as Drivers from './Drivers';
import * as Files from './Files';
import * as CertificateInsurances from './CertificateInsurances';

// The top-level state object
export interface ApplicationState {
    Accounts: Accounts.AccountsState | undefined;
    Policies: Policies.PoliciesState | undefined;
    Drivers: Drivers.DriversState | undefined;
    Files: Files.FilesState | undefined;
    CertificateInsurances: CertificateInsurances.CertificateInsurancesState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    Policies: Policies.reducer,
    Accounts: Accounts.reducer,
    Drivers:Drivers.reducer,
    Files: Files.reducer,
    CertificateInsurances: CertificateInsurances.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
