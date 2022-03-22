import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import PinkSlips from '../components/PinkSlips';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={PinkSlips} />
            
        </Layout>
        
    </div>
);
