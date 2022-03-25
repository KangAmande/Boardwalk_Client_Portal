import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import Helppage from '../components/Helppage';

export default () => (
    <div>
        <Layout>
            <Route path='/' component={Helppage} />

        </Layout>

    </div>
);
