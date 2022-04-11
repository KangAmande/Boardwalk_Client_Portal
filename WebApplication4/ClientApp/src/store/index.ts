import * as Policies from './Policies';
import * as Drivers from './Drivers';
import * as Vehicles from './Vehicles';
import * as Equipments from './Equipments';
import * as ClientBuildingInfo from './ClientBuildingInfo';
import * as AddEquipments from './AddEquipments';
import * as RemoveEquipments from './RemoveEquipment';
import * as AddLocations from './AddLocations';
import * as RemoveLocations from './RemoveLocations';
import * as AddDrivers from './AddDrivers';
import * as RemoveDrivers from './RemoveDrivers';
import * as AddVehicles from './AddVehicles';
import * as RemoveVehicles from './RemoveVehicles';
import * as Accounts from './Accounts';
import * as Files from './Files';
import * as CertificateInsurances from './CertificateInsurances';
import * as BindingInfos from './BindingInfos';

// The top-level state object
export interface ApplicationState {
    CertificateRequests: CertificateRequests.CertificateRequestsState | undefined;
    ClientBuildingInfo: ClientBuildingInfo.ClientBuildingInfoState | undefined;
    Policies: Policies.PoliciesState | undefined;
    Drivers: Drivers.DriversState | undefined;
    Vehicles: Vehicles.VehiclesState | undefined;
    Equipments: Equipments.EquipmentsState | undefined;
    AddEquipments: AddEquipments.AddEquipmentsState | undefined;
    RemoveEquipments: RemoveEquipments.RemoveEquipmentsState | undefined;
    AddLocations: AddLocations.AddLocationsState | undefined;
    RemoveLocations: RemoveLocations.RemoveLocationsState | undefined;
    AddDrivers: AddDrivers.AddDriversState | undefined;
    RemoveDrivers: RemoveDrivers.RemoveDriversState | undefined;
    AddVehicles: AddVehicles.AddVehiclesState | undefined;
    RemoveVehicles: RemoveVehicles.RemoveVehiclesState | undefined;
    ClientAddVehicles: AddVehicles.ClientAddVehiclesState | undefined;
    ClientRemoveVehicles: RemoveVehicles.RemoveClientVehiclesState | undefined;
    ClientAddDrivers: AddDrivers.ClientAddDriversState | undefined;
    ClientRemoveDrivers: RemoveDrivers.ClientRemoveDriversState | undefined;
    ClientAddLocations: AddLocations.ClientAddLocationsState | undefined;
    ClientRemoveLocations: RemoveLocations.ClientRemoveLocationsState | undefined;
    ClientAddEquipments: AddEquipments.ClientAddEquipmentsState | undefined;
    ClientRemoveEquipments: RemoveEquipments.ClientRemoveEquipmentsState | undefined;
    Accounts: Accounts.AccountsState | undefined;
    Files: Files.FilesState | undefined;
    BindingInfos: BindingInfos.BindinginfosState | undefined;
    CertificateInsurances: CertificateInsurances.CertificateInsurancesState | undefined;
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
    RemoveEquipments: RemoveEquipments.reducer,
    AddLocations: AddLocations.reducer,
    RemoveLocations: RemoveLocations.reducer,
    AddDrivers: AddDrivers.reducer,
    RemoveDrivers: RemoveDrivers.reducer,
    AddVehicles: AddVehicles.reducer,
    RemoveVehicles: RemoveVehicles.reducer,
    ClientAddVehicles: AddVehicles.clientReducer,
    ClientRemoveVehicles: RemoveVehicles.clientReducer,
    ClientAddDrivers: AddDrivers.clientReducer,
    ClientRemoveDrivers: RemoveDrivers.clientReducer,
    ClientAddLocations: AddLocations.clientReducer,
    ClientRemoveLocations: RemoveLocations.clientReducer,
    ClientAddEquipments: AddEquipments.clientReducer,
    ClientRemoveEquipments: RemoveEquipments.clientReducer,
    Accounts: Accounts.reducer,
    Files: Files.reducer,
    BindingInfos: BindingInfos.reducer,
    CertificateInsurances: CertificateInsurances.reducer
};

// This type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
