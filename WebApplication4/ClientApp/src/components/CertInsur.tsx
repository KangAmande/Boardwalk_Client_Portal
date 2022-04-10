import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import NavMenu from './NavMenu';
import { ApplicationState } from '../store';
import * as CIStore from '../store/CertificateInsurances';
import { CustomAccordion } from './Accordion';

type CIProps =
    CIStore.CertificateInsurancesState// ... state we've requested from the Redux store
    & typeof CIStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class CertInsur extends React.PureComponent<CIProps> {

    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestCertificateInsurances(startDateIndex);
    }

    private showCI() {
        console.log(this.props.CI);
        return (

            <div>
                {this.props.CI.map((d: CIStore.CertificateInsurances) =>
                    <div>
                        <CustomAccordion key={d.id} title={"CertificateInsurances "}
                            content={
                                <div>
                                    <p>Insuracne type {d.insuranceType}</p>
                                    <p>Holder {d.holderName}</p>
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
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Certificate of Insurance</h1>
                        {
                            this.showCI()
                        }
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
/*
class CertInsur extends React.Component<{}, { shown: boolean }> {
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
                        <h1>Certificate of Insurance</h1>
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
};*/
export default connect(
    (state: ApplicationState) => state.CertificateInsurances, // Selects which state properties are merged into the component's props
    CIStore.actionCreators
)(CertInsur as any);