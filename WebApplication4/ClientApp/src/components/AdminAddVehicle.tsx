import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddVehiclesStore from '../store/AddVehicles';
type AddVehiclesProps =
    AddVehiclesStore.AddVehiclesState // ... state we've requested from the Redux store
    & typeof AddVehiclesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class AdminAddVehicle extends React.PureComponent<AddVehiclesProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddVehicles(startDateIndex);
    }
    private showAddVehicles() {
        console.log(this.props.AddVehicle);
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Type</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Radius</th>
                        <th>VIN</th>
                        <th>Primary Driver</th>
                        <th>Occassional Driver</th>
                        <th>List Price</th>
                        <th>Class</th>
                        <th>Weight</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.AddVehicle.map((d: AddVehiclesStore.AddVehicles, index) =>
                        <tr key={index}>
                            <th>{d.id}</th>
                            <th>{d.clientId}</th>
                            <th>{d.type}</th>
                            <th>{d.year}</th>
                            <th>{d.make}</th>
                            <th>{d.model}</th>
                            <th>{d.radius}</th>
                            <th>{d.vin}</th>
                            <th>{d.primaryDriver}</th>
                            <th>{d.occassionDriver}</th>
                            <th>{d.listPrice}</th>
                            <th>{d.class}</th>
                            <th>{d.weight}</th>
                            <th>{d.requestTime}</th>
                            <th><button>Yes</button><button>No</button></th>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar />
                    </div>
                    <div className="col-8">
                        <h1>Add Vehicles Requests</h1>
                        <div>
                            {this.showAddVehicles()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.AddVehicles,
    AddVehiclesStore.actionCreators)(AdminAddVehicle as any);