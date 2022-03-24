import * as React from 'react';
import { Route } from 'react-router';

import './custom.css';
<<<<<<< HEAD
import makeRequest from './components/makeRequest';
import scheduleCall from './components/scheduleCall';
import underReview from './components/underReview';
import scheduledEquipments from './components/scheduledEquipments';
import helppage from './components/helppage';
import Account from './components/Account';
import Changepassword from './components/Changepassword';

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
            <Route path='/make-request' component={makeRequest} />
            <Route path='/sched-equip' component={scheduledEquipments}/>
            <Route path='/sched-call' component={scheduleCall}/>
            <Route path='/under-review' component={underReview} />
            <Route path='/help-page' component={helppage} />
            <Route path='/Account-page' component={Account} />
            <Route path='/Changepassword' component={Changepassword} />
        </Layout>
        
=======

import { BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import HomePage from './Routes/HomePage';
import pmr from './Routes/pmr';
import sdr from './Routes/sdr';
import pinkSlipRoute from './Routes/pinkSlipRoute';
import centinsRoute from './Routes/centinsRoute';
import invoiceRoute from './Routes/invoiceRoute';
import policylimitRoute from './Routes/policylimitRoute';
import vehicleInsuredRoute from './Routes/vehicle-insuredRoute';
import driverInsuredRoute from './Routes/driver-insuredRoute';
import equipInsured from './Routes/equip-insuredRoutes';
import riskAddrRoutes from './Routes/risk-addrRoutes';
import mailAddrRoute from './Routes/mail-addrRoute';
import makeRequestRoute from './Routes/make-requestRoute';
import schedEquip from './Routes/sched-equipRoute';
import schedCallRoute from './Routes/sched-callRoute';
import underReviewRoute from './Routes/under-reviewRoute';
import MakeRequest from './Routes/RequestRoute';
import addVehicles from './Routes/addVehicle';
import addDriver from './Routes/addDriver';
import changeMailingAddress from './Routes/changeMailingAddress';


export default () => (
    <div>
      <BrowserRouter>     
                <Route exact path="/" component={LoginForm} />
                <Route path="/home" component={HomePage} />
                <Route path='/policy-menu' component={pmr} />
                <Route path='/sign-docs' component={sdr} />
                <Route path='/pink-slips' component={pinkSlipRoute} />
                <Route path='/cert-insur' component={centinsRoute} />
                <Route path='/invoices' component={invoiceRoute} />
                <Route path='/policy-limits' component={policylimitRoute} />
                <Route path='/vehicle-insured' component={vehicleInsuredRoute} />
                <Route path='/driver-insured' component={driverInsuredRoute} />
                <Route path='/equip-insured' component={equipInsured} />
                <Route path='/risk-addr' component={riskAddrRoutes} />
                <Route path='/mail-addr' component={mailAddrRoute} />
                <Route path='/request' component={makeRequestRoute} />
                <Route path='/sched-equip' component={schedEquip}/>
                <Route path='/sched-call' component={schedCallRoute}/>
                <Route path='/under-review' component={underReviewRoute}/>
                <Route path='/Make-request' component={MakeRequest} />
                <Route path='/addVehicles' component={addVehicles} />
                <Route path='/addDriver' component={addDriver} />
                <Route path='/changeMailingAddress' component={changeMailingAddress} />
         </BrowserRouter>
>>>>>>> parent of 95a8812 (Revert "Merge pull request #10 from Hruthvikk/master")
    </div>
);
