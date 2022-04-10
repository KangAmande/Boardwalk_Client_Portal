import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveLocationsStore from '../store/RemoveLocations';
import ReviewBar from './ReviewBar';
type Props =
    RemoveLocationsStore.ClientRemoveLocationsState // ... state we've requested from pe Redux store
    & typeof RemoveLocationsStore.clientActionCreators
    & RouteComponentProps<{ startDateIndex: string }>;
class ReviewRemoveLocations extends React.PureComponent<Props> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientRemoveLocations(startDateIndex);
        console.log(this.props.ClientRemoveLocation);
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
                        <h1>Remove Location Requests</h1>
                        <div>
                            <div>
                                {this.props.ClientRemoveLocation.map((d: RemoveLocationsStore.RemoveLocations, index) =>
                                    <div key={index}>
                                        <h3>Request {index + 1}</h3>
                                        <p>Location Id: {d.locationId}</p>
                                        <p>Request time: {d.requestTime}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => (state.ClientRemoveLocations),
    (RemoveLocationsStore.clientActionCreators))(ReviewRemoveLocations as any);
