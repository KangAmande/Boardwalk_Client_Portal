import * as React from 'react';
import { Route } from 'react-router';
import './custom.css';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
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
import helppage from './Routes/Helppage';
import Account from './Routes/AccountRoute';
import AdminCertRequests from './components/AdminCertRequests';
import AdminChangeMailAdd from './components/AdminChangeMailAdd';
import AdminAddDriver from './components/AdminAddDriver';
import AdminAddVehicle from './components/AdminAddVehicle';
import AdminAddEquipment from './components/AdminAddEquipment';
import AdminRemoveEquipment from './components/AdminRemoveEquipment';
import AdminAddLocation from './components/AdminAddLocation';
export default () => (
    <div>
      <BrowserRouter>     
            <Route exact path="/" component={LoginForm} />
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
            <Route path='/help' component={helppage} />
            <Route path='/Account' component={Account} />
            <Route path='/admin-cert-requests' component={AdminCertRequests} />
            <Route path='/admin-change-mail-add' component={AdminChangeMailAdd} />
            <Route path='/admin-add-drivers' component={AdminAddDriver} />
            <Route path='/admin-add-vehicles' component={AdminAddVehicle} />
            <Route path='/admin-add-equip' component={AdminAddEquipment} />
            <Route path='/admin-remove-equip' component={AdminRemoveEquipment} />
            <Route path='/admin-add-location' component={AdminAddLocation} />
         </BrowserRouter>
    </div>
);
