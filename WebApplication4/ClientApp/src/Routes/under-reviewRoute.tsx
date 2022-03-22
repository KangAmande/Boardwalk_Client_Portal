import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import underReview from '../components/underReview';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={underReview} />
        </Layout>
        
    </div>
);
