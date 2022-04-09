import * as Policies from './Policies';
import * as Drivers from './Drivers';
import * as Vehicles from './Vehicles';
import * as Equipments from './Equipments';
import * as ClientBuildingInfo from './ClientBuildingInfo';
import * as AddEquipments from './AddEquipments';
import * as RemoveEquipments from './RemoveEquipment';

// The top-level state object
export interface ApplicationState {
    ClientBuildingInfo: ClientBuildingInfo.ClientBuildingInfoState | undefined;
    Policies: Policies.PoliciesState | undefined;
    Drivers: Drivers.DriversState | undefined;
    Vehicles: Vehicles.VehiclesState | undefined;
    Equipments: Equipments.EquipmentsState | undefined;
    AddEquipments: AddEquipments.AddEquipmentsState | undefined;
    RemoveEquipments: RemoveEquipments.RemoveEquipmentsState | undefined;
}

// Whenever an action is dispatched, Redux will update each top-level application state property using
// the reducer with the matching name. It's important that the names match exactly, and that the reducer
// acts on the corresponding ApplicationState property type.
export const reducers = {
    Policies: Policies.reducer,
    Drivers: Drivers.reducer,
    ClientBuildingInfo: ClientBuildingInfo.reducer,
    Vehicles: Vehicles.reducer,
    Equipments: Equipments.reducer,
    AddEquipments: AddEquipments.reducer,
    RemoveEquipments: RemoveEquipments.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
