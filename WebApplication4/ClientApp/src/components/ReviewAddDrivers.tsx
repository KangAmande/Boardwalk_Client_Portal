// this is to view add/remove driver requests which are under review.
import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddVehiclesStore from '../store/AddVehicles';
import ReviewBar from './ReviewBar';
type Props =
    AddVehiclesStore.ClientAddVehiclesState // ... state we've requested from pe Redux store
    & typeof AddVehiclesStore.clientActionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class underReview extends React.PureComponent<Props> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientAddVehicles(startDateIndex);
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
                        <h1>Add Driver requests</h1>
                        <div>
                            {this.props.ClientAddVehicle.map((d: AddVehiclesStore.AddVehicles, index) =>
                                <div key={index}>
                                    <h3>Request {index+1}</h3>
                                    <p>Type: {d.type}</p>
                                    <p>Year: {d.year}</p>
                                    <p>Make: {d.make}</p>
                                    <p>Model: {d.model}</p>
                                    <p>Radius: {d.radius}</p>
                                    <p>VIN: {d.vin}</p>
                                    <p>Primary Driver: {d.primaryDriver}</p>
                                    <p>Occassional Driver: {d.occassionDriver}</p>
                                    <p>List Price: {d.listPrice}</p>
                                    <p>Class: {d.class}</p>
                                    <p>Weight: {d.weight}</p>
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
export default connect((state: ApplicationState) => (state.ClientAddVehicles),
    (AddVehiclesStore.clientActionCreators))(underReview as any);
