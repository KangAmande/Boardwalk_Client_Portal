import * as React from 'react';
import { Route } from 'react-router';
import EquipInsured from '../components/EquipInsured';
import Layout from '../components/Layout';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={EquipInsured} />
            
        </Layout>
        
    </div>
);
