// This is admin side view for seeing requests of change mailing address by client.
// Admin can accept or reject the request.
import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
class AdminCertRequests extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar />
                    </div>
                    <div className="col-8">
                        <h1>Change Mailing Address</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(AdminCertRequests as any);