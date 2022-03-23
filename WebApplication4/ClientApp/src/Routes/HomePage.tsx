import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import Home from '../components/Home';

import 'custom.css';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={Home} />
            
        </Layout>
        
    </div>
);
