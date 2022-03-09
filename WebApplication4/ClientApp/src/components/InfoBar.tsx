import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class InfoBar extends React.PureComponent {
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/policy-limits">
                    Primary Policy Limits and Deductibles
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/vehicle-insured">
                    List of Vehicles insured under auto policy
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/driver-insured">
                    List of Drivers insured under auto policy
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/equip-insured">
                    List of Equipments insured under commercial policy
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/risk-addr">
                    Risk Address
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/mail-addr">
                    Mailing Address
                </NavLink>
            </Container>
        );
    }
}