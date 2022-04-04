import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';

class AdminAddVehicle extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar/>
                    </div>
                    <div className="col-8">
                        <h1>Remove Vehicles Requests</h1>
                    
                        <h1>Add Vehicles Requests</h1>
                    
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(AdminAddVehicle as any);