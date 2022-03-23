import * as React from 'react';
import { connect } from 'react-redux';
import { CustomAccordion } from './Accordion';
import Sidebarmr from './Sidebarmr';

class addDriver extends React.Component<{}, { shown: boolean }> {

    public render() {
        let i: number = 1;
        let a = [];
        while (i < 3) {
            a.push(<div><CustomAccordion
                title={"drivers " + i.toString()}
                content={<div><p>Full Name</p><p>Birth Date</p><p>License Number</p><p>license Year</p></div>} />
                <br />
            </div>);
            i++;
        }
        return (
            <React.Fragment>
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
                        {a}

                    </div>

                </div>
            </React.Fragment>
        );
    }
};
export default connect()(addDriver);