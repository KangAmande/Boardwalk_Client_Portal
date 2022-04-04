import * as React from 'react';
import { connect } from 'react-redux';
import { CustomAccordion } from './Accordion';
import Sidebarmr from './Sidebarmr';
import NavMenu from './NavMenu';
class addVehicles extends React.Component<{}, { shown: boolean }> {

    public render() {
        let i: number = 1;
        let a = [];
        while (i < 3) {
            a.push(<div><CustomAccordion
                title={"Vehicles " + i.toString()}
                content={<div><p>Type</p><p>Year</p><p>Make</p><p>Model</p></div>} />
                <br />
            </div>);
            i++;
        }
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
                        {a}

                    </div>

                </div>
            </React.Fragment>
        );
    }
};
export default connect()(addVehicles);