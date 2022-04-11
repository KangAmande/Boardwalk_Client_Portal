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
    & RouteComponentProps<{ startDateIndex: string }>;
class addVehicles extends React.PureComponent<VehiclesProps> {
    public state = {
        id: 0,
        type: "",
        year:0,
        make: "",
        model: "",
        radius: "",
        vin: "",
        primaryDriver: "",
        occassionalDriver: "",
        listPrice: 0,
        class: "",
        weight:""
    };
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
                        <CustomAccordion key={index} title={"Vehicle " + (index + 1)} content={<div>
                            <p>Id : {d.id}</p>
                            <p>Make : {d.vehicleMake}</p>
                            <p>Model : {d.vehicleModel}</p>
                            <p>Type : {d.vehicleType}</p>
                            <button onClick={(e) => this.removeVehicle(d.id)}>Remove</button>
                        </div>} />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    private removeVehicle(e: any) {
        this.setState({ id: e }, () => this.props.removeVehicles(this.state.id));
    }
    private addVehicle = (e: any) => {
        e.preventDefault();
        this.props.addVehicles(this.state.type, this.state.year, this.state.make, this.state.model, this.state.radius, this.state.vin, this.state.primaryDriver, this.state.occassionalDriver, this.state.listPrice, this.state.class,this.state.weight);
    }
    public render() {

        return (
            <React.Fragment>
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr />
                    </div>
                    <div className='col-8'>
                        <h1>Add New Vehicles</h1>
                        <form onSubmit={this.addVehicle}>
                            <input type='text' placeholder='Type'
                                onChange={(e) => this.setState({ type: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Year'
                                onChange={(e) => this.setState({ year: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Make'
                                onChange={(e) => this.setState({ make: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Model'
                                onChange={(e) => this.setState({ model: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Radius'
                                onChange={(e) => this.setState({ radius: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='VIN'
                                onChange={(e) => this.setState({ vin: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Primary Driver'
                                onChange={(e) => this.setState({ primaryDriver: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Occassional Driver'
                                onChange={(e) => this.setState({ occassionalDriver: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='List Price'
                                onChange={(e) => this.setState({ listPrice: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Class'
                                onChange={(e) => this.setState({ class: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Weight'
                                onChange={(e) => this.setState({ weight: e.target.value })}/>
                            <br /><br />

                            <input type='submit' value='Submit' />
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