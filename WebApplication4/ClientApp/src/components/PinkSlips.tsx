import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as BindingInfosStore from '../store/BindingInfos';
import { CustomAccordion } from './Accordion';
import { type } from 'os';

type BindingProps =
    BindingInfosStore.BindinginfosState // ... state we've requested from the Redux store
    & typeof BindingInfosStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class PinkSlips extends React.Component<BindingProps> {

    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestBindinginfos(startDateIndex);
    }
    private showpinkslip() {
        console.log(this.props.Bindinginfo);
        return (
            <div>
                {this.props.Bindinginfo.map((d: BindingInfosStore.Bindinginfos) =>
                    <div>
                        <CustomAccordion key={d.id} title={"Pink Slip "}
                            content={
                                <div>
                                    <p>effective data {d.effectiveDate}</p>
                                    <p>expiry date {d.expiryDate}</p>
                                    <p>created by {d.createdBy}</p>
                                </div>
                            } />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    public render() {

        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Auto Insurance Pink Slips</h1>

                        <div>
                            {this.showpinkslip()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.BindingInfos,
    BindingInfosStore.actionCreators
)(PinkSlips as any);
/*
class PinkSlips extends React.Component<{}, { shown: boolean }> {
    constructor() {
        super({}, {});
        this.state = {
            shown: false
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ shown: true });
    };

    hideModal = () => {
        this.setState({ shown: false });
    };
    public render() {

        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Auto Insurance Pink Slips</h1>
                        <p>Click on a document to view or download it</p>
                        <NavLink tag={Link} onClick={this.showModal}>Document 1</NavLink><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 2</NavLink><br />
                        <NavLink tag={Link} onClick={this.showModal}>Document 3</NavLink><br />
                        <Popup show={this.state.shown} handleClose={this.hideModal}>
                            <p>Modal</p>
                        </Popup>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(PinkSlips);
*/