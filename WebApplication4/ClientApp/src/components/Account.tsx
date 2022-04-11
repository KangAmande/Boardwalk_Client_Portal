// This component will display Client's information such as their username and city.
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';
import Accountsidebar from './Accountsidebar'
import NavMenu from './NavMenu';
class Account extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                        <Accountsidebar />
                    </div>
                    <div className='col-8'>
                        <p>user name:</p>
                        <p>city</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(Account);
