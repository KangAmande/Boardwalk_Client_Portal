import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class RequestSidebar extends React.PureComponent {
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/make-Request">
                    Request Insurance Certificate
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/changeMailingAddress">
                    Change Maling Address
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/addVehicles">
                    Add/Remove Vehicles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/addDriver">
                    Add/Remove Drivers
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/">
                    Add/ Remove Locations and Buildings
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/">
                    Add/ Remove Scheduled Equipments
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/">
                    Schedule A call with Broker
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/">
                    Request Under review
                </NavLink>

            </Container>
        );
    }
}