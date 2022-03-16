import * as React from 'react';
import { connect } from 'react-redux';
import { CustomAccordion } from './Accordion';
import Sidebarmr from './Sidebarmr';


class underReview extends React.Component<{}, { shown: boolean }> {
   
    public render() {
        let i:number = 1;
       
        let addVehicle = [];
        let removeVehicle = [];
        let addDriver = [];
        let removeDriver = [];
        let addBuildingLoc = [];
        let removeBuildingLoct = [];
        let addEquipment = [];
        let removeEquipment = [];
        
        while (i < 2) {
            addVehicle.push(<div>
                <CustomAccordion 
                title={"Add Vehicle"}
                content={<div>Requests</div>} />
                <br />
                </div>);
                
                removeVehicle.push(<div>
                    <CustomAccordion 
                    title={"Remove Vehicle"}
                    content={<div>Requests</div>} />
                    <br />
                    </div>);

                addDriver.push(<div>
                <CustomAccordion 
                title={"Add Driver"}
                content={<div>Requests</div>} />
                <br />
                </div>);

                removeDriver.push(<div>
                <CustomAccordion 
                title={"Remove Driver"}
                content={<div>Requests</div>} />
                <br />
                </div>);

                addEquipment.push(<div>
                <CustomAccordion 
                title={"Add Equipment"}
                content={<div>Requests</div>} />
                <br />
                </div>);

                removeEquipment.push(<div>
                <CustomAccordion 
                title={"Remove Equipment"}
                content={<div>Requests</div>} />
                <br />
                </div>);

                addBuildingLoc.push(<div>
                <CustomAccordion 
                title={"Add Building/Location"}
                content={<div>Requests</div>} />
                <br />
                </div>);

                removeBuildingLoct.push(<div>
                <CustomAccordion 
                title={"Remove Building/Location"}
                content={<div>Requests</div>} />
                <br />
                </div>);

            i++;
        }
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr/>
                    </div>
                    <div className='col-8' id='mr1add'>
                       <div>{addDriver}</div>
                       <div>{removeDriver}</div>
                       <div>{addVehicle}</div>
                       <div>{removeVehicle}</div>
                       <div>{addEquipment}</div>
                       <div>{removeEquipment}</div>
                       <div>{addBuildingLoc}</div>
                       <div>{removeBuildingLoct}</div>
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(underReview);
