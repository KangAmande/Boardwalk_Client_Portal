import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { CustomAccordion } from './Accordion';

class VehicleInsured extends React.Component {
    public render() {
        let i: number = 1;
        let a = [];
        while (i < 5) {
            a.push(<div><CustomAccordion title={"Vehicle " + i.toString()} content={<div><p>Type</p><p>Year</p><p>Make</p><p>Model</p></div>} /><br/></div>);
            i++;
        }
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>List of Vehicles insured under auto policy</h1>
                        <br/>
                        <div>{a}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(VehicleInsured);
