import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CustomAccordion } from './Accordion';

class makeRequest extends React.Component<{}, { shown: boolean }> {
    
    public render() {
        let i:number = 1;
        let a = [];
        while (i < 3) {
            a.push(<div><CustomAccordion 
                title={"Location " + i.toString()}
                content={<div><p>Building Type</p><p>Primary Operation</p><p>Street</p><p>City</p><p>Postal Code</p></div>} />
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
                        <h1>Add New Location/Building</h1>
                        <form>
                            <input type='text' placeholder='Building Type'/>
                            <br/><br/>
                            <input type='text' placeholder='Street'/>
                            <br/><br/>
                            <input type='text' placeholder='City'/>
                            <br/><br/>
                            <input type='text' placeholder='Postal Code'/>
                            <br/><br/>
                            <input type='text' placeholder='Primary Operation'/>
                            <br/><br/>
                            <input type='text' placeholder='Building Construction'/>
                            <br/><br/>
                            <input type='text' placeholder='Wall Construction'/>
                            <br/><br/>
                            <input type='text' placeholder='Floor Construction'/>
                            <br/><br/>
                            <input type='text' placeholder='Sprinklered'/>
                            <br/><br/>
                            <input type='text' placeholder='Deck Connection'/>
                            <br/><br/>
                            <input type='text' placeholder='Roof Covering'/>
                            <br/><br/>
                            <input type='text' placeholder='Size sqft'/>
                            <br/><br/>
                            <input type='text' placeholder='Number of Storeys'/>
                            <br/><br/>
                            <input type='text' placeholder='Year Built'/>
                            <br/><br/>
                            <input type='text' placeholder='Construction Type'/>
                            <br/><br/>
                            <input type='text' placeholder='Alarm'/>
                            <br/><br/>
                            <input type='text' placeholder='Mortgage'/>
                            <br/><br/>
                            <input type='submit' value='submit'/>
                        </form>
                        <br/>
                        <br/>
                        {a}

                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(makeRequest);