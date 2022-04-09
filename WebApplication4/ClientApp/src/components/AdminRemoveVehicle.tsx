import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveVehiclesStore from '../store/RemoveVehicles';
type RemoveVehiclesProps =
    RemoveVehiclesStore.RemoveVehiclesState // ... state we've requested from the Redux store
    & typeof RemoveVehiclesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class AdminRemoveVehicle extends React.PureComponent<RemoveVehiclesProps>{
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestRemoveVehicles(startDateIndex);
    }
    private showRemoveVehicles() {
        console.log(this.props.RemoveVehicle);
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Vehicle ID</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.RemoveVehicle.map((d: RemoveVehiclesStore.RemoveVehicles, index) =>
                        <tr key={index}>
                            <td>{d.id}</td>
                            <td>{d.clientId}</td>
                            <td>{d.vehicleId}</td>
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
                        <h1>Remove Vehicle Requests</h1>
                        <div>
                            {this.showRemoveVehicles()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.RemoveVehicles,
    RemoveVehiclesStore.actionCreators)(AdminRemoveVehicle as any);