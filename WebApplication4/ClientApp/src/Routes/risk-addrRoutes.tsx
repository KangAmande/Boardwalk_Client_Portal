import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import RiskAddr from '../components/RiskAddr';



export default () => (
    <div>
        <Layout>
            <Route path='/' component={RiskAddr} />
            
        </Layout>
        
    </div>
);
