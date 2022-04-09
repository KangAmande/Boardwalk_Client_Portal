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
                <table>
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
                            <th>{d.id}</th>
                            <th>{d.clientId}</th>
                            <th>{d.buildingType}</th>
                            <th>{d.street}</th>
                            <th>{d.city}</th>
                            <th>{d.postalCode}</th>
                            <th>{d.province}</th>
                            <th>{d.primaryOp}</th>
                            <th>{d.buildingConstr}</th>
                            <th>{d.wallConstr}</th>
                            <th>{d.floorConstr}</th>
                            <th>{d.sprinklered}</th>
                            <th>{d.deckConstruction}</th>
                            <th>{d.roofCovering}</th>
                            <th>{d.sizeSqft}</th>
                            <th>{d.storeysNumber}</th>
                            <th>{d.yearBuilt}</th>
                            <th>{d.constrType}</th>
                            <th>{d.alarm}</th>
                            <th>{d.mortgage}</th>
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