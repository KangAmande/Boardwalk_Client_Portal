import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import scheduledEquipments from '../components/scheduledEquipments';



export default () => (
    <div>
        <Layout>
            <Route path='/' component={scheduledEquipments} />
            
        </Layout>
        
    </div>
);
