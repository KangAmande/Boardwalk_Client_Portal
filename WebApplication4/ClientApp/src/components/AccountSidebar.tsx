import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AccountSidebar extends React.PureComponent {
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/Account-page">
                    Account info
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/Changepassword">
                    change password
                </NavLink><br />
<<<<<<< Updated upstream
                <NavLink className="menu-item" tag={Link} to="/">
                    change e-mail
                </NavLink><br />
=======

>>>>>>> Stashed changes
            </Container>
        );
    }
}