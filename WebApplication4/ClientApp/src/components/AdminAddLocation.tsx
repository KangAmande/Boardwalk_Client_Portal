import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
class AdminAddLocation extends React.PureComponent {
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar />
                    </div>
                    <div className="col-8">
                        <h1>Location Requests</h1>
                        <table>
                            <tr>

                            </tr>
                        </table>
                        <table>
                            <tr>

                            </tr>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(AdminAddLocation as any);