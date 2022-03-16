import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';


class scheduleCall extends React.Component<{}, { shown: boolean }> {
   
    public render() {
        
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr/>
                    </div>
                    <div className='col-8' id='mr1add'>
                        <h1>Schedule a call with Broker</h1>
                        <br/>
                        <br/>
                        <p>
                            A call can be booked with our Broker <a href="">Here</a>
                        </p>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(scheduleCall);
