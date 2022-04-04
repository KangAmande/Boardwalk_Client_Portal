import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import PolicyMenu from '../components/PolicyMenu';


export default () => (
    <div>
        <Layout>

            <Route path='/' component={PolicyMenu} />
            
        </Layout>
        
    </div>
);
