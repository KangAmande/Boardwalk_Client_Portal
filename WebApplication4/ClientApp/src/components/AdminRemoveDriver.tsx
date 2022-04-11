// This is admin side view for seeing requests of remove driver by client.
// Admin can accept or reject the request.
import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveDriversStore from '../store/RemoveDrivers';
type RemoveDriversProps =
    RemoveDriversStore.RemoveDriversState // ... state we've requested from the Redux store
    & typeof RemoveDriversStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class AdminRemoveDriver extends React.PureComponent<RemoveDriversProps>{
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestRemoveDrivers(startDateIndex);
    }
    private showRemoveDrivers() {
        console.log(this.props.RemoveDriver);
        return (
            <div>
                <table className="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Driver ID</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.RemoveDriver.map((d: RemoveDriversStore.RemoveDrivers, index) =>
                        <tr key={index}>
                            <td>{d.id}</td>
                            <td>{d.clientId}</td>
                            <td>{d.driverId}</td>
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
                        <h1>Remove Driver Requests</h1>
                        <div>
                            {this.showRemoveDrivers()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.RemoveDrivers,
    RemoveDriversStore.actionCreators)(AdminRemoveDriver as any);