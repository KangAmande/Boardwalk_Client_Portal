import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class InfoBar extends React.PureComponent {
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/admin-cert-requests">
                    Insurance Certificate Requests
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-change-mail-add">
                    Change Mailing Address
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-vehicles">
                    Add/Remove Vehicles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-drivers">
                    Add/Remove Drivers
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-location">
                    Add/Remove Locations and Buildings
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-equip">
                    Add/Remove Scheduled Equipment
                </NavLink>
            </Container>
        );
    }
}