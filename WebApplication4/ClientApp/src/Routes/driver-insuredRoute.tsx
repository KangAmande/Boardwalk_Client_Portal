import * as React from 'react';
import { Route } from 'react-router';
import DriverInsured from '../components/DriverInsured';
import Layout from '../components/Layout';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={DriverInsured} />
            
        </Layout>
        
    </div>
);
