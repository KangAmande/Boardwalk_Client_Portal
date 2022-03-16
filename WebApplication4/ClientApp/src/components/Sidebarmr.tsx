import * as React from 'react';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.PureComponent{
    public render() {
        return (
            <Container>
                <NavLink className="menu-item" tag={Link} to="/make-request">
                    Add/Remove Locations and Buildings
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/sched-equip">
                    Add/Remove Scheduled Equipment
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/sched-call">
                    Scheduled a call with Broker
                </NavLink><br />
                <NavLink className="menu-item" tag={Link} to="/under-review">
                    Requests Under Review
                </NavLink><br />
            </Container>
        );
    }
}