import * as React from 'react';
import { Link, Switch,Route } from 'react-router-dom';
import { Container, NavLink } from 'reactstrap';
import './login.css';

export default class Login extends React.PureComponent {

    render() {
        // const history = useHistory();
       
        return (
            
            <Container>
                <div className='login'>
                    <h1>Welcome to Client Portal</h1>
                    <br />
                    <label>Email:</label>
                        <input type="email" name="email" placeholder="abc@abc.com" />
                    
                    <br/><br/>
                    <label>Password:</label>
                        <input type="text" name="password" placeholder="" />
                    
                    <br/><br/>
                    
                    <button><Link to="/policy-limits">Login</Link></button><br/>
                    <Link to="/admin-cert-requests">Admin</Link>
                   
                </div>
            </Container>
        );
    }

}
function useHistory() {
    throw new Error('Function not implemented.');
}

