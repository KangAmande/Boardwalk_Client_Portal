import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import PolicyMenu from './components/PolicyMenu';
import SignDocs from './components/SignDocs';
import PinkSlips from './components/PinkSlips';
import CertInsur from './components/CertInsur';
import Invoices from './components/Invoices';

import './custom.css'

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        <Route path='/policy-menu' component={PolicyMenu} />
        <Route path='/sign-docs' component={SignDocs} />
        <Route path='/pink-slips' component={PinkSlips} />
        <Route path='/cert-insur' component={CertInsur} />
        <Route path='/invoices' component={Invoices} />
    </Layout>
);
