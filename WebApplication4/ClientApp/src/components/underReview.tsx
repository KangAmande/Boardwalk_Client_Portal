import * as React from 'react';
import { connect } from 'react-redux';
import { CustomAccordion } from './Accordion';
import Sidebarmr from './Sidebarmr';
import NavMenu from './NavMenu';

class underReview extends React.Component<{}, { shown: boolean }> {
   
    public render() {
        return (
            <React.Fragment>
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr/>
                    </div>
                    <div className='col-8'>
                        <div>
                            <CustomAccordion
                                title={"Insurance Certificate Requests"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Mailing Address Requests"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                        <div>
                            <CustomAccordion
                                title={"Add Vehicle"}
                                content={<div>Requests</div>} />
                            <br />
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(underReview);
