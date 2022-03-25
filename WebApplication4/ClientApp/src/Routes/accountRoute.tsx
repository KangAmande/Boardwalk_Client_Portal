import * as React from 'react';
import { Route } from 'react-router';
import Account from '../components/Account';
import Layout from '../components/Layout';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={Account} />
        </Layout>

    </div>
);