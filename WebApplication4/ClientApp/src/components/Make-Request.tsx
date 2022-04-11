import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import './form.css';
import NavMenu from './NavMenu';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as CertificateRequestsStore from '../store/CertificateRequests';
import { CustomAccordion } from './Accordion';

type CertificateRequestsProps =
    CertificateRequestsStore.CertificateRequestsState // ... state we've requested from the Redux store
    & typeof CertificateRequestsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class MakeRequest extends React.PureComponent<CertificateRequestsProps>  {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestCertificateRequests(startDateIndex);
    }
    private showCertificateRequests() {
        console.log(this.props.CertificateRequests);
        return (
            <div>
                {this.props.CertificateRequests.map((d: CertificateRequestsStore.CertificateRequests, index) =>
                    <div>
                        <CustomAccordion key={index} title={"Location"} content={<div>
                            <p>Full Name : {d.City}</p>
                            <p>Driver License : {d.Name}</p>
                            <p></p>
                            {/* <button onClick={(e) => this.removeLocation(d.id)}>Remove</button> */}
                        </div>} />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    public render() {


        return (
            < React.Fragment >
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr />
                    </div>

                    <div className='col-8' id='mr1add'>

                        <h1>Request Insurance Certificate</h1>
                        <form>
                            <label> Name </label>&nbsp;&nbsp;&nbsp;
                            <input type='text' placeholder='Name' />
                            <br /><br />
                            <label> Address </label>
                            <input type='text' placeholder='address' />
                            <br /><br />
                            <label> Province </label>
                            <select>
                                <option value="ON">ON</option>
                                <option value="BC">BC</option>
                                <option value="AL">AL</option>
                                <option value="NL">NL</option>
                                <option value="PE">PE</option>
                                <option value="NS">NS</option>
                                <option value="NB">NB</option>
                                <option value="QC">QC</option>
                                <option value="MB">MB</option>
                                <option value="SK">SK</option>
                                <option value="AB">AB</option>
                                <option value="YT">YT</option>
                                <option value="NT">NT</option>
                                <option value="NU">NU</option>

                            </select>

                            <br /><br />
                            <label> City </label>
                            <input type='text' placeholder='CITY' />
                            <br /><br />
                            <label> Postal Code </label>
                            <input type='text' placeholder='Postal Code' />
                            <br /><br />


                            <input type='submit' value='submit' />
                        </form>
                        <br />
                        {this.showCertificateRequests()}
                    </div>
                </div>

            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => state.CertificateRequests,
    CertificateRequestsStore.actionCreators)(MakeRequest as any);






