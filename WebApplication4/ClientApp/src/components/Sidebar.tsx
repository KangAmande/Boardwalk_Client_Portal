import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.PureComponent{
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/policy-menu">
                    Policy
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/sign-docs">
                    Signed Documents
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/pink-slips">
                    Auto Insurance pink slips
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/cert-insur">
                    Certificate of Insurance
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/invoices">
                    Invoices
                </NavLink>
            </Container>
        );
    }
}