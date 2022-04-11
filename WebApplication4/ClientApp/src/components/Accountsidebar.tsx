import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Accountsidebar extends React.PureComponent {
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/Account">
                    Account info
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/Changepassword">
                    Change Password
                </NavLink><br />

                
            </Container>
        );
    }
}