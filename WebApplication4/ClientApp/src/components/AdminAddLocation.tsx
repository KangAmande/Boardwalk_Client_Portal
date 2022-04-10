import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddLocationsStore from '../store/AddLocations';
type AddLocationsProps =
    AddLocationsStore.AddLocationsState // ... state we've requested from the Redux store
    & typeof AddLocationsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class AdminAddLocation extends React.PureComponent<AddLocationsProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddLocations(startDateIndex);
    }
    private showAddLocations() {
        console.log(this.props.AddLocation);
        return (
            <div>
                <table className="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Building Type</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Postal Code</th>
                        <th>Province</th>
                        <th>Primary Operation</th>
                        <th>Building Construction</th>
                        <th>Wall Construction</th>
                        <th>Floor Construction</th>
                        <th>Sprinklered</th>
                        <th>Deck Construction</th>
                        <th>Roof Covering</th>
                        <th>Size Sqft</th>
                        <th>Number of storeys</th>
                        <th>Year Built</th>
                        <th>Construction Type</th>
                        <th>Alarm</th>
                        <th>Mortgage</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.AddLocation.map((d: AddLocationsStore.AddLocations, index) =>
                        <tr key={index}>
                            <td>{d.id}</td>
                            <td>{d.clientId}</td>
                            <td>{d.buildingType}</td>
                            <td>{d.street}</td>
                            <td>{d.city}</td>
                            <td>{d.postalCode}</td>
                            <td>{d.province}</td>
                            <td>{d.primaryOp}</td>
                            <td>{d.buildingConstr}</td>
                            <td>{d.wallConstr}</td>
                            <td>{d.floorConstr}</td>
                            <td>{d.sprinklered}</td>
                            <td>{d.deckConstruction}</td>
                            <td>{d.roofCovering}</td>
                            <td>{d.sizeSqft}</td>
                            <td>{d.storeysNumber}</td>
                            <td>{d.yearBuilt}</td>
                            <td>{d.constrType}</td>
                            <td>{d.alarm}</td>
                            <td>{d.mortgage}</td>
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
                        <h1>Add Location Requests</h1>
                        <div>
                            {this.showAddLocations()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.AddLocations,
    AddLocationsStore.actionCreators)(AdminAddLocation as any);