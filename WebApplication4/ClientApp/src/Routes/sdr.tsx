import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';


import signDoc from '../components/SignDocs';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={signDoc} />
        </Layout>     
    </div>
);
