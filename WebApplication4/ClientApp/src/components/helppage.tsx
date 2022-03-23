import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';


class helppage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div>
                    <h3>Email address: <a href="mailto:andrew@bwinsco.com">andrew@bwinsco.com</a> </h3>
                    <h3>phone number:(123)456-7890</h3>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(helppage);
