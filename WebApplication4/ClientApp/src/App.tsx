import * as React from 'react';
import { Route } from 'react-router';
import './custom.css';
import { BrowserRouter } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import pmr from './components/PolicyMenu';
import sdr from './components/SignDocs';
import pinkSlipRoute from './components/PinkSlips';
import centinsRoute from './components/CertInsur';
import invoiceRoute from './components/Invoices';
import policylimitRoute from './components/PolicyLimits';
import vehicleInsuredRoute from './components/VehicleInsured';
import driverInsuredRoute from './components/DriverInsured';
import equipInsured from './components/EquipInsured';
import riskAddrRoutes from './components/RiskAddr';
import mailAddrRoute from './components/MailAddr';
import makeRequestRoute from './components/makeRequest';
import schedEquip from './components/scheduledEquipments';
import schedCallRoute from './components/scheduleCall';
import MakeRequest from './components/Make-Request';
import addVehicles from './components/addVehicles';
import addDriver from './components/addDriver';
import changeMailingAddress from './components/changeMailingAddress';
import helppage from './components/Helppage';
import Account from './components/Account';
import AdminCertRequests from './components/AdminCertRequests';
import AdminChangeMailAdd from './components/AdminChangeMailAdd';
import AdminAddDriver from './components/AdminAddDriver';
import AdminRemoveDriver from './components/AdminRemoveDriver';
import AdminAddVehicle from './components/AdminAddVehicle';
import AdminRemoveVehicle from './components/AdminRemoveVehicle';
import AdminAddEquipment from './components/AdminAddEquipment';
import AdminRemoveEquipment from './components/AdminRemoveEquipment';
import AdminAddLocation from './components/AdminAddLocation';
import AdminRemoveLocation from './components/AdminRemoveLocation';
import ReviewAddVehicles from './components/underReview';
import ReviewRemoveVehicles from './components/ReviewRemoveVehicles';
import ReviewAddDrivers from './components/ReviewAddDrivers';
import ReviewRemoveDrivers from './components/ReviewRemoveDrivers';
import ReviewAddLocations from './components/ReviewAddLocations';
import ReviewRemoveLocations from './components/ReviewRemoveLocations';
import ReviewAddEquipments from './components/ReviewAddEquipments';
import ReviewRemoveEquipments from './components/ReviewRemoveEquipments';
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
            <Route path='/Make-request' component={MakeRequest} />
            <Route path='/addVehicles' component={addVehicles} />
            <Route path='/addDriver' component={addDriver} />
            <Route path='/changeMailingAddress' component={changeMailingAddress} />
            <Route path='/help' component={helppage} />
            <Route path='/Account' component={Account} />
            <Route path='/admin-cert-requests' component={AdminCertRequests} />
            <Route path='/admin-change-mail-add' component={AdminChangeMailAdd} />
            <Route path='/admin-add-drivers' component={AdminAddDriver} />
            <Route path='/admin-remove-drivers' component={AdminRemoveDriver} />
            <Route path='/admin-add-vehicles' component={AdminAddVehicle} />
            <Route path='/admin-remove-vehicles' component={AdminRemoveVehicle} />
            <Route path='/admin-add-equip' component={AdminAddEquipment} />
            <Route path='/admin-remove-equip' component={AdminRemoveEquipment} />
            <Route path='/admin-add-location' component={AdminAddLocation} />
            <Route path='/admin-remove-location' component={AdminRemoveLocation} />
            <Route path='/under-review' component={ReviewAddVehicles} />
            <Route path='/review-remove-vehicles' component={ReviewRemoveVehicles} />
            <Route path='/review-add-drivers' component={ReviewAddDrivers} />
            <Route path='/review-remove-drivers' component={ReviewRemoveDrivers} />
            <Route path='/review-add-locations' component={ReviewAddLocations} />
            <Route path='/review-remove-locations' component={ReviewRemoveLocations} />
            <Route path='/review-add-equipments' component={ReviewAddEquipments} />
            <Route path='/review-remove-equipments' component={ReviewRemoveEquipments} />
         </BrowserRouter>
    </div>
);
