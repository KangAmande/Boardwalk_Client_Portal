import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
class AdminAddDriver extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar/>
                    </div>
                    <div className="col-8">
                        <h1>Remove Drivers Requests</h1>
                    
                        <h1>Add Drivers Requests</h1>
                    
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(AdminAddDriver as any);