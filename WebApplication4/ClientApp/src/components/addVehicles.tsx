import * as React from 'react';
import { connect } from 'react-redux';
import { CustomAccordion } from './Accordion';
import Sidebarmr from './Sidebarmr';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as VehiclesStore from '../store/Vehicles';

type VehiclesProps =
VehiclesStore.VehiclesState // ... state we've requested from the Redux store
    & typeof VehiclesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string}>;
class addVehicles extends React.PureComponent<VehiclesProps> {

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
                        <CustomAccordion key={index} title={"Location"} content={<div>
                            <p>Full Name : {d.vehicleMake}</p>
                            <p>Driver License : {d.vehicleModel}</p>
                            <p>Driver License : {d.vehicleType}</p>
                            {/* <button onClick={(e) => this.removeLocation(d.id)}>Remove</button> */}
                        </div>} />
                        <br/>
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
                        <Sidebarmr />
                    </div>
                    <div className='col-8' id='mr1add'>
                        <h1>Add New Vehicles</h1>
                        <form>
                            <input type='text' placeholder='Type' />
                            <br /><br />
                            <input type='text' placeholder='Year' />
                            <br /><br />
                            <input type='text' placeholder='Make' />
                            <br /><br />
                            <input type='text' placeholder='Model' />
                            <br /><br />
                            <input type='text' placeholder='Radius' />
                            <br /><br />
                            <input type='text' placeholder='VIN' />
                            <br /><br />
                            <input type='text' placeholder='Primary Driver' />
                            <br /><br />
                            <input type='text' placeholder='Occassional Driver' />
                            <br /><br />
                            <input type='text' placeholder='List Price' />
                            <br /><br />
                            <input type='text' placeholder='Class' />
                            <br /><br />
                            <input type='text' placeholder='Weight' />
                            <br /><br />
                            
                            <input type='submit' value='submit' />
                        </form>
                        <br />
                        <br />
                        {this.showVehicles()}

                    </div>

                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => state.Vehicles,
VehiclesStore.actionCreators)(addVehicles as any);