import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as RemoveEquipmentsStore from '../store/RemoveEquipment';
type RemoveEquipmentsProps =
    RemoveEquipmentsStore.RemoveEquipmentsState // ... state we've requested from the Redux store
    & typeof RemoveEquipmentsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class AdminRemoveEquipment extends React.PureComponent<RemoveEquipmentsProps>{
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestRemoveEquipments(startDateIndex);
    }
    private showRemoveEquipments() {
        console.log(this.props.RemoveEquipment);
        return (
            <div>
                <table className="table table-bordered">
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Equipment ID</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                    {this.props.RemoveEquipment.map((d: RemoveEquipmentsStore.RemoveEquipments, index) =>
                        <tr key={index}>
                            <td>{d.id}</td>
                            <td>{d.clientId}</td>
                            <td>{d.equipId}</td>
                            <td>{d.requestTime}</td>
                            <td><button>Yes</button><button>No</button></td>
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
                        <h1>Remove Equipment Requests</h1>
                        <div>
                            {this.showRemoveEquipments()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.RemoveEquipments,
    RemoveEquipmentsStore.actionCreators)(AdminRemoveEquipment as any);