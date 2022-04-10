import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class ReviewBar extends React.PureComponent {
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/under-review">
                    Insurance Cerificate Requests
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/under-review">
                    Mailing address Requests
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/under-review">
                    Add Vehicles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/review-remove-vehicles">
                    Remove Vehicles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/review-add-drivers">
                    Add Drivers
                </NavLink><br/>
                <NavLink className="menu-item" tag={Link} to="/review-remove-drivers">
                    Remove Drivers
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/review-add-locations">
                    Add Locations
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/review-remove-locations">
                    Remove Locations
                </NavLink><br/>
                <NavLink className="menu-item" tag={Link} to="/review-add-equipments">
                    Add Equipments
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/review-remove-equipments">
                    Remove Equipments
                </NavLink>
            </Container>
        );
    }
}