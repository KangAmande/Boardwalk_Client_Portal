import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveDriversStore from '../store/RemoveDrivers';
import ReviewBar from './ReviewBar';
type Props =
    RemoveDriversStore.ClientRemoveDriversState // ... state we've requested from pe Redux store
    & typeof RemoveDriversStore.clientActionCreators
    & RouteComponentProps<{ startDateIndex: string }>;
class ReviewRemoveDrivers extends React.PureComponent<Props> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientRemoveDrivers(startDateIndex);
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
                        <h1>Remove Driver Requests</h1>
                        <div>
                            <div>
                                {this.props.ClientRemoveDriver.map((d: RemoveDriversStore.RemoveDrivers, index) =>
                                    <div key={index}>
                                        <h3>Request {index + 1}</h3>
                                        <p>Driver Id: {d.driverId}</p>
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
export default connect((state: ApplicationState) => (state.ClientRemoveDrivers),
    (RemoveDriversStore.clientActionCreators))(ReviewRemoveDrivers as any);
