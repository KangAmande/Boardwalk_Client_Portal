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
                <table className="table table-bordered">
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
                            <td>{d.id}</td>
                            <td>{d.clientId}</td>
                            <td>{d.type}</td>
                            <td>{d.year}</td>
                            <td>{d.make}</td>
                            <td>{d.model}</td>
                            <td>{d.radius}</td>
                            <td>{d.vin}</td>
                            <td>{d.primaryDriver}</td>
                            <td>{d.occassionDriver}</td>
                            <td>{d.listPrice}</td>
                            <td>{d.class}</td>
                            <td>{d.weight}</td>
                            <td>{d.requestTime}</td>
                            <td><button>Yes</button><button>No</button></td>
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