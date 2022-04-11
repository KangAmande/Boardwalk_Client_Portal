// this is to view add/remove locations requests which are under review.
import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddLocationsStore from '../store/AddLocations';
import ReviewBar from './ReviewBar';
type Props =
    AddLocationsStore.ClientAddLocationsState // ... state we've requested from pe Redux store
    & typeof AddLocationsStore.clientActionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class ReviewAddLocations extends React.PureComponent<Props> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientAddLocations(startDateIndex);
    }
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <ReviewBar />
                    </div>
                    <div className='col-8'>
                        <h1>Add Location Requests</h1>
                        <div>
                            {this.props.ClientAddLocation.map((d: AddLocationsStore.AddLocations, index) =>
                                <div key={index}>
                                    <h3>Request { index+1}</h3>
                                    <p>Building Type: {d.buildingType}</p>
                                    <p>Street: {d.street}</p>
                                    <p>City: {d.city}</p>
                                    <p>Postal Code: {d.postalCode}</p>
                                    <p>Province: {d.province}</p>
                                    <p>Primary Operation: {d.primaryOp}</p>
                                    <p>Building Construction: {d.buildingConstr}</p>
                                    <p>Wall Construction: {d.wallConstr}</p>
                                    <p>Floor Construction: {d.floorConstr}</p>
                                    <p>Sprinklered: {d.sprinklered}</p>
                                    <p>Deck Construction: {d.deckConstruction}</p>
                                    <p>Roof Covering: {d.roofCovering}</p>
                                    <p>Size Sqft: {d.sizeSqft}</p>
                                    <p>Number of storeys: {d.storeysNumber}</p>
                                    <p>Year Built: {d.yearBuilt}</p>
                                    <p>Construction Type: {d.constrType}</p>
                                    <p>Alarm: {d.alarm}</p>
                                    <p>Mortgage: {d.mortgage}</p>
                                    <p>Request Time: {d.requestTime}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => (state.ClientAddLocations),
    (AddLocationsStore.clientActionCreators))(ReviewAddLocations as any);
