import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import VehicleInsured from '../components/VehicleInsured';

export default () => (
    <div>
        <Layout>
            <Route path='/' component={VehicleInsured} />
        </Layout>
        
    </div>
);
