import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import Changepassword from '../components/Changepassword';

export default () => (
    <div>
        <Layout>
            <Route path='/' component={Changepassword} />

        </Layout>

    </div>
);
