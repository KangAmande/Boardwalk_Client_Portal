import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import scheduleCall from '../components/scheduleCall';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={scheduleCall} />
            
        </Layout>
        
    </div>
);
