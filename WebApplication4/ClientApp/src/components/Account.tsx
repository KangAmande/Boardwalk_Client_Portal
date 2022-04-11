import * as React from 'react';
import { connect } from 'react-redux';
import NavMenu from './NavMenu';
class Account extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                    </div>
                    <div className='col-8'>
                        <p>First Name:</p>
                        <p>Last Name:</p>
                        <p>Business:</p>
                        <p>Email:</p>
                        <p>Password:</p>
                        <p>Insurance start Date:</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(Account);
