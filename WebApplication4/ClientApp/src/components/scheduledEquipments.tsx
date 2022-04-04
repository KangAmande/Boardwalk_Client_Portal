import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CustomAccordion } from './Accordion';
class scheduledEquipments extends React.Component<{}, { shown: boolean }> {
   
    public render() {
        let i:number = 1;
        let a = [];
        while (i < 3) {
            a.push(<div><CustomAccordion 
                title={"Equipment " + i.toString()}
                content={<div><p>Make</p><p>Model</p><p>Year</p><p>Serial Number</p><p>Value</p></div>} />
                <br />
                </div>);
            i++;
        }
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr/>
                    </div>
                    <div className='col-8' id='mr1add'>
                        <h1>Add New Equipment</h1>
                        <form>
                            <input type='text' placeholder='Year'/>
                            <br/><br/>
                            <input type='text' placeholder='Make'/>
                            <br/><br/>
                            <input type='text' placeholder='Model'/>
                            <br/><br/>
                            <input type='text' placeholder='Value   '/>
                            <br/><br/>
                            <input type='text' placeholder='Serial Number'/>
                            <br/><br/>
                            <input type='submit' value='submit'/>
                        </form>
                        <br/><br/>
                        {a}
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(scheduledEquipments);
