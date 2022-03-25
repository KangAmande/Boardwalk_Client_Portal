import * as React from 'react';
import { Route } from 'react-router';
import helppage from '../components/helppage';
import Layout from '../components/Layout';



export default () => (
    <div>
        <Layout>
            <Route path='/' component={helppage} />
            
        </Layout>
        
    </div>
);