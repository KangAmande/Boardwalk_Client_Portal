// This Component is used to add Driver in client's policy.
// It will have Few details asked in a form to be filled out by clint.
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
    & RouteComponentProps<{ startDateIndex: string}>;
class addDriver extends React.PureComponent<DriversProps>  {
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
                        <CustomAccordion key={index} title={"Location"} content={<div>
                            <p>Full Name : {d.fullName}</p>
                            <p>Driver License : {d.driverLicense}</p>
                            <p></p>
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
                    <div className='col-8' id='mr2add'>
                        <h1>Add New Drivers</h1>
                        <form>
                            <input type='text' placeholder='First Name' />
                            <br /><br />
                            <input type='text' placeholder='Last Name' />
                            <br /><br />
                            <input type='text' placeholder='Birth Date' />
                            <br /><br />
                            <input type='text' placeholder='Driver Train' />
                            <br /><br />
                            <input type='text' placeholder='License Number' />
                            <br /><br />
                            <input type='text' placeholder='Conviction' />
                            <br /><br />
                            <input type='text' placeholder='License Year' />
                            <br /><br />
     
                            <input type='submit' value='submit' />
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