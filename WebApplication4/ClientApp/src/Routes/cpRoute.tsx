import * as React from 'react';
import { Route } from 'react-router';
import Changepassword from '../components/Changepassword';
import Layout from '../components/Layout';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={Changepassword} />
        </Layout>
        
    </div>
);
