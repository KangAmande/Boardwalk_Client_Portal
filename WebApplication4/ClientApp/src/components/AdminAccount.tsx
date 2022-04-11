import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
class AdminUploadedDocs extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                    </div>
                    <div className="col-8">
                        <h1>Account</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(AdminUploadedDocs as any);