import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import PolicyLimits from '../components/PolicyLimits';

export default () => (
    <div>
        <Layout>
            <Route path='/' component={PolicyLimits} />
            
        </Layout>
        
    </div>
);
