import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class PolicyMenu extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebar />
                    </div>
                    <div className='col-8'>
                        <h1>Policy</h1>
                        <a>Document 1</a><br />
                        <a>Document 2</a><br />
                        <a>Document 3</a><br />
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(PolicyMenu);