import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class DriverInsured extends React.Component {
    public render() {

        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>List of Drivers insured under auto policy</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(DriverInsured);

