import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import NavMenu from './NavMenu';
=======
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as FilesStore from '../store/Files';
import { CustomAccordion } from './Accordion';

type FilesProps =
    FilesStore.FilesState // ... state we've requested from the Redux store
    & typeof FilesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class Invoices extends React.PureComponent<FilesProps> {

    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestFiles(startDateIndex);
    }
    private showFiles() {
        console.log(this.props.File);
        return (
            <div>
                {this.props.File.map((d: FilesStore.Files) =>
                    <div>
                        <CustomAccordion key={d.id} title={"File " + d.name.toString()}
                            content={<div><p>provided By {d.providerName}</p></div>}
                        />
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
                        <h1>Invoices</h1>
                        {this.showFiles()}
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.Files,
    FilesStore.actionCreators
)(Invoices as any);
/*
>>>>>>> 231172509945bb50a81d9ffc949de8f11c91045e
class Invoices extends React.Component<{}, { shown: boolean }> {
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
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Invoices</h1>
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
export default connect()(Invoices);*/