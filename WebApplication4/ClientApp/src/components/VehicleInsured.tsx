import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as VehiclesStore from '../store/Vehicles';
import { CustomAccordion } from './Accordion';
import NavMenu from './NavMenu';
// At runtime, Redux will merge together...
type VehiclesProps =
    VehiclesStore.VehiclesState // ... state we've requested from the Redux store
    & typeof VehiclesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class VehicleInsured extends React.PureComponent<VehiclesProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestVehicles(startDateIndex);
    }
    private showVehicles() {
        console.log(this.props.Vehicle);
        return (
            <div>
                {this.props.Vehicle.map((d: VehiclesStore.Vehicles, index) =>
                    <div>
                        <CustomAccordion key={index} title={d.vehicleType.toString()} content={<div><p>Make - {d.vehicleMake}</p><p>Model - {d.vehicleModel}</p></div>} />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    public render() {
        return (
            <React.Fragment>
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>List of Drivers insured under auto policy</h1>
                        <br />
                        <div>
                            {this.showVehicles()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.Vehicles,
    VehiclesStore.actionCreators
)(VehicleInsured as any);
