import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import PolicyMenu from './components/PolicyMenu';
import SignDocs from './components/SignDocs';
import PinkSlips from './components/PinkSlips';
import CertInsur from './components/CertInsur';
import Invoices from './components/Invoices';
import PolicyLimits from './components/PolicyLimits';
import VehicleInsured from './components/VehicleInsured';
import DriverInsured from './components/DriverInsured';
import EquipInsured from './components/EquipInsured';
import RiskAddr from './components/RiskAddr';
import MailAddr from './components/MailAddr';
import './custom.css';

export default () => (
    <div>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/policy-menu' component={PolicyMenu} />
            <Route path='/sign-docs' component={SignDocs} />
            <Route path='/pink-slips' component={PinkSlips} />
            <Route path='/cert-insur' component={CertInsur} />
            <Route path='/invoices' component={Invoices} />
            <Route path='/policy-limits' component={PolicyLimits} />
            <Route path='/vehicle-insured' component={VehicleInsured} />
            <Route path='/driver-insured' component={DriverInsured} />
            <Route path='/equip-insured' component={EquipInsured} />
            <Route path='/risk-addr' component={RiskAddr} />
            <Route path='/mail-addr' component={MailAddr} />
        </Layout>
        
    </div>
);
