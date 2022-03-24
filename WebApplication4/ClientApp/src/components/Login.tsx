import * as React from 'react';
import { Link, Switch,Route } from 'react-router-dom';
import { Container, NavLink } from 'reactstrap';
<<<<<<< HEAD
import HomePageLayout from './Layout';
=======

>>>>>>> parent of 95a8812 (Revert "Merge pull request #10 from Hruthvikk/master")


import './login.css'

export default class Login extends React.PureComponent {

    render() {
        // const history = useHistory();
       
        return (
            
            <Container>
                <div className='login'>
                    <h1>Welcome to Client Portal</h1>
                    <br />
                    <label>Email:
                        <input type="email" name="email" placeholder="abc@abc.com" />
                    </label>
                    <br/><br/>
                    <label>Password:
                        <input type="text" name="password" placeholder="" />
                    </label>
                    <br/><br/>
                    
                    <Link to="/home">Login</Link>
                   
                </div>
            </Container>
        );
    }

}
function useHistory() {
    throw new Error('Function not implemented.');
}

