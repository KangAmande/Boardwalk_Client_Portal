import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveEquipmentsStore from '../store/RemoveEquipment';
import ReviewBar from './ReviewBar';
type Props =
    RemoveEquipmentsStore.ClientRemoveEquipmentsState // ... state we've requested from pe Redux store
    & typeof RemoveEquipmentsStore.clientActionCreators
    & RouteComponentProps<{ startDateIndex: string }>;
class ReviewRemoveEquipments extends React.PureComponent<Props> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientRemoveEquipments(startDateIndex);
        console.log(this.props.ClientRemoveEquipment);
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
                        <h1>Remove Equipment Requests</h1>
                        <div>
                                {this.props.ClientRemoveEquipment.map((d: RemoveEquipmentsStore.RemoveEquipments, index) =>
                                    <div key={index}>
                                        <h3>Request {index + 1}</h3>
                                        <p>Equipment Id: {d.equipId}</p>
                                        <p>Request time: {d.requestTime}</p>
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => (state.ClientRemoveEquipments),
    (RemoveEquipmentsStore.clientActionCreators))(ReviewRemoveEquipments as any);
