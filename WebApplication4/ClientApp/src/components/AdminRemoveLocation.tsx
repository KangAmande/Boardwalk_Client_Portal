import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveLocationsStore from '../store/RemoveLocations';
type RemoveLocationsProps =
    RemoveLocationsStore.RemoveLocationsState // ... state we've requested from the Redux store
    & typeof RemoveLocationsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class AdminRemoveLocation extends React.PureComponent<RemoveLocationsProps>{
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestRemoveLocations(startDateIndex);
    }
    private showRemoveLocations() {
        console.log(this.props.RemoveLocation);
        return (
            <div>
                <table className="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Location ID</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.RemoveLocation.map((d: RemoveLocationsStore.RemoveLocations, index) =>
                        <tr key={index}>
                            <td>{d.id}</td>
                            <td>{d.clientId}</td>
                            <td>{d.locationId}</td>
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
                        <h1>Remove Location Requests</h1>
                        <div>
                            {this.showRemoveLocations()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.RemoveLocations,
    RemoveLocationsStore.actionCreators)(AdminRemoveLocation as any);