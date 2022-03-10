import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { CustomAccordion } from './Accordion';


class PolicyLimits extends React.Component {
    public render() {
        let i:number = 1;
        let a = [];
        while (i < 5) {
            a.push(<div><CustomAccordion title={"Policy Limit " + i.toString()} content={<div><p>Insurance Company</p><p>Policy Effective Date</p><p>Policy Expiry Date</p></div>} /><br /></div>);
            i++;
        }
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>Primary Policy Limits and Deductibles</h1>
                        <br />
                        <div>{a}</div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(PolicyLimits);
