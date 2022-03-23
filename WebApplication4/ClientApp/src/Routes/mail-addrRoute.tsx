import * as React from 'react';
import { Route } from 'react-router';
import Layout from '../components/Layout';
import MailAddr from '../components/MailAddr';


export default () => (
    <div>
        <Layout>
            <Route path='/' component={MailAddr} />
            
        </Layout>
        
    </div>
);
