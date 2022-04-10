import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddEquipmentsStore from '../store/AddEquipments';
import ReviewBar from './ReviewBar';
type Props =
    AddEquipmentsStore.ClientAddEquipmentsState // ... state we've requested from pe Redux store
    & typeof AddEquipmentsStore.clientActionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class ReviewAddEquipment extends React.PureComponent<Props> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientAddEquipments(startDateIndex);
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
                        <h1>Add Equipments Request</h1>
                        <div>
                            {this.props.ClientAddEquipment.map((d: AddEquipmentsStore.AddEquipments, index) =>
                                <div key={index}>
                                    <h3>Request {index + 1}</h3>
                                    <p>Year: {d.year}</p>
                                    <p>Make: {d.make}</p>
                                    <p>Model: {d.model}</p>
                                    <p>Value: {d.value}</p>
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
export default connect((state: ApplicationState) => (state.ClientAddEquipments),
    (AddEquipmentsStore.clientActionCreators))(ReviewAddEquipment as any);
