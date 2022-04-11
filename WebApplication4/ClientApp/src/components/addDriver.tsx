import * as React from 'react';
import { connect } from 'react-redux';
import { CustomAccordion } from './Accordion';
import Sidebarmr from './Sidebarmr';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as DriversStore from '../store/Drivers';

type DriversProps =
    DriversStore.DriversState // ... state we've requested from the Redux store
    & typeof DriversStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class addDriver extends React.PureComponent<DriversProps>  {
    public state = {
        id: 0,
        firstName: "",
        lastName: "",
        birthDate: Date,
        driverTrain: "",
        licenseNumber: "",
        conviction:"",
        licenseYear:""
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
        this.props.requestDrivers(startDateIndex);
    }
    private showDrivers() {
        console.log(this.props.Driver);
        return (
            <div>
                {this.props.Driver.map((d: DriversStore.Drivers, index) =>
                    <div>
                        <CustomAccordion key={index} title={"Driver " + (index + 1)} content={<div>
                            <p>Id: {d.id}</p>
                            <p>Full Name : {d.fullName}</p>
                            <p>Driver License : {d.driverLicense}</p>
                            <p></p>
                            <button onClick={(e) => this.removeDriver(d.id)}>Remove</button>
                        </div>} />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    private removeDriver(e: any) {
        console.log("ID: " + e);
        this.setState({ id: e }, () => this.props.removeDrivers(this.state.id));
    }
    private addDriver = (e: any) => {
        e.preventDefault();
        this.props.addDrivers(this.state.firstName, this.state.lastName, this.state.birthDate, this.state.driverTrain, this.state.licenseNumber, this.state.conviction, this.state.licenseYear);
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
                        <h1>Add New Drivers</h1>
                        <form onSubmit={this.addDriver}>
                            <input type='text' placeholder='First Name'
                                onChange={(e) => this.setState({ firstName: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Last Name'
                                onChange={(e) => this.setState({ lastName: e.target.value })}/>
                            <br /><br />
                            <input type='date' placeholder='Birth Date'
                                onChange={(e) => this.setState({ birthDate: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Driver Train'
                                onChange={(e) => this.setState({ driverTrain: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='License Number'
                                onChange={(e) => this.setState({ licenseNumber: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Conviction'
                                onChange={(e) => this.setState({ conviction: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='License Year'
                                onChange={(e) => this.setState({ licenseYear: e.target.value })}/>
                            <br /><br />

                            <input type='submit' value='Submit' />
                        </form>
                        <br />
                        <br />
                        {this.showDrivers()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => state.Drivers,
    DriversStore.actionCreators)(addDriver as any);