import * as React from 'react';
import { Route } from 'react-router';
import CertInsur from '../components/CertInsur';
import Layout from '../components/Layout';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={CertInsur} />
        </Layout>
        
    </div>
);
