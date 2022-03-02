import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Popup from './Popup';
import { Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class CertInsur extends React.Component {
    private togglePopup() {

    }
    private showPopup() {

    }
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
                        <a onClick={this.showPopup}>Document 1</a><br />
                        <a>Document 2</a><br />
                        <a>Document 3</a><br />
                        <Popup content={<p>Hello</p>} handleClose={this.togglePopup} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(CertInsur);