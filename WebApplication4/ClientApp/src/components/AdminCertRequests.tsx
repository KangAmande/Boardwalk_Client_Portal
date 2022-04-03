import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';

class AdminCertRequests extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div>
                    <h1>Insurance Certificate Requests</h1>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(AdminCertRequests as any);