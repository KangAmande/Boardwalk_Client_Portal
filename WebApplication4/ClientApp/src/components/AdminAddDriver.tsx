import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddDriversStore from '../store/AddDrivers';
type AddDriversProps =
    AddDriversStore.AddDriversState // ... state we've requested from the Redux store
    & typeof AddDriversStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class AdminAddDriver extends React.PureComponent<AddDriversProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddDrivers(startDateIndex);
    }
    private showAddDrivers() {
        console.log(this.props.AddDriver);
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Date</th>
                        <th>Driver Train</th>
                        <th>License Number</th>
                        <th>Conviction</th>
                        <th>License Year</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.AddDriver.map((d: AddDriversStore.AddDrivers, index) =>
                        <tr key={index}>
                            <th>{d.id}</th>
                            <th>{d.clientId}</th>
                            <th>{d.firstName}</th>
                            <th>{d.lastName}</th>
                            <th>{d.birthDate}</th>
                            <th>{d.driverTrain}</th>
                            <th>{d.licenseNumber}</th>
                            <th>{d.conviction}</th>
                            <th>{d.licenseYear}</th>
                            <th>{d.requestTime}</th>
                            <th><button>Yes</button><button>No</button></th>
                        </tr>
                    )}
                </table>
            </div>
        );
    }
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar />
                    </div>
                    <div className="col-8">
                        <h1>Add Driver Requests</h1>
                        <div>
                            {this.showAddDrivers()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.AddDrivers,
    AddDriversStore.actionCreators)(AdminAddDriver as any);