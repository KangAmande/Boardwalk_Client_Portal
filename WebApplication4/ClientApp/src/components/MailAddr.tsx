import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';

class MailAddr extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>Mailing Address</h1>
                        <br />
                        <div className='row'>
                            <div className='col-5'>
                                <h4>Address</h4>
                            </div>
                            <div className='col-7'>
                                <p>123 Main Street</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <h4>City</h4>
                            </div>
                            <div className='col-7'>
                                <p>Hamilton</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <h4>Province</h4>
                            </div>
                            <div className='col-7'>
                                <p>ON</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-5'>
                                <h4>Postal Code</h4>
                            </div>
                            <div className='col-7'>
                                <p>L7J8T5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(MailAddr);

