import * as React from 'react';
import { Route } from 'react-router';
import Invoices from '../components/Invoices';
import Layout from '../components/Layout';




export default () => (
    <div>
        <Layout>
            <Route path='/' component={Invoices} />
            
        </Layout>
        
    </div>
);
