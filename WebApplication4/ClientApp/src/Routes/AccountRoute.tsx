import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import Account from '../components/Account';

export default () => (
    <div>
        <Layout>
            <Route path='/' component={Account} />

        </Layout>

    </div>
);
