import * as React from 'react';
import { Container } from 'reactstrap';
export default class Sidebar extends React.PureComponent{
    public render() {
        return (
            <Container>
                <a className="menu-item" href="/policy-menu">
                    Policy
                </a><br/>
                <a className="menu-item" href="/">
                    Signed Documents
                </a><br />
                <a className="menu-item" href="/">
                    Auto Insurance pink slips
                </a><br />
                <a className="menu-item" href="/">
                    Certificate of Insurance
                </a><br />
                <a className="menu-item" href="/">
                    Invoices
                </a>
            </Container>
        );
    }
}