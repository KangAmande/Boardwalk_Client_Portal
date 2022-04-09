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
                    Add Vehicles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-remove-vehicles">
                    Remove Vehicles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-drivers">
                    Add Drivers
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-remove-drivers">
                    Remove Drivers
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-location">
                    Add Locations and Buildings
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-remove-location">
                    Remove Locations and Buildings
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/admin-add-equip">
                    Add Scheduled Equipment
                </NavLink>
                <NavLink className="menu-item" tag={Link} to="/admin-remove-equip">
                    Remove Scheduled Equipment
                </NavLink>
            </Container>
        );
    }
}