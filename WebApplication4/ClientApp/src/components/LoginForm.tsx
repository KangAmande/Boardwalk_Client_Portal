import * as React from 'react';
import { connect } from 'react-redux';

import Login from './Login';

class LoginForm extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <Login />          
                </div>
            </React.Fragment>
        );
    }
}
export default connect()(LoginForm);