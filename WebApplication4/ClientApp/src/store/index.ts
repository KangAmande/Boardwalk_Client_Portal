import * as Policies from './Policies';
import * as Drivers from './Drivers';
import * as Vehicles from './Vehicles';
import * as Equipments from './Equipments';

// The top-level state object
export interface ApplicationState {
    Policies: Policies.PoliciesState | undefined;
    Drivers: Drivers.DriversState | undefined;
    Vehicles: Vehicles.VehiclesState | undefined;
    Equipments: Equipments.EquipmentsState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    Policies: Policies.reducer,
    Drivers: Drivers.reducer,
    Vehicles: Vehicles.reducer,
    Equipments: Equipments.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
