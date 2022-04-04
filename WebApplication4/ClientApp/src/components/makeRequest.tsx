import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import { Popup } from './Popup';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as ClientBuildingInfoStore from '../store/ClientBuildingInfo';
import { CustomAccordion } from './Accordion';
import NavMenu from './NavMenu';
type ClientBuildingInfoProps =
ClientBuildingInfoStore.ClientBuildingInfoState // ... state we've requested from the Redux store
    & typeof ClientBuildingInfoStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string}>;
class makeRequest extends React.PureComponent<ClientBuildingInfoProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestClientBuildingInfo(startDateIndex);
    }
    private showClientBuildingInfo() {
        console.log(this.props.ClientBuildingInfo);
        return (
        <div>
                {this.props.ClientBuildingInfo.map((d: ClientBuildingInfoStore.ClientBuildingInfo, index) =>
                    <div>
                        <CustomAccordion key={index} title={"Location"} content={<div>
                            <p>primary operation : {d.primaryOperation}</p>
                            <p>city : {d.city}</p>
                            <p>street : {d.street}</p>
                            <p>postal code : {d.postalCode}</p>
                        </div>} />
                        <br/>
                    </div>
                )}
        </div>
        );
    }
    public render() {
        
        return (
            <React.Fragment>
                <NavMenu/>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr/>
                    </div>
                    <div className='col-8' id='mr1add'>
                        <h1>Add New Location/Building</h1>
                        <form>
                            <input type='text' placeholder='Building Type'/>
                            <br/><br/>
                            <input type='text' placeholder='Street'/>
                            <br/><br/>
                            <input type='text' placeholder='City'/>
                            <br/><br/>
                            <input type='text' placeholder='Postal Code'/>
                            <br/><br/>
                            <input type='text' placeholder='Primary Operation'/>
                            <br/><br/>
                            <input type='text' placeholder='Building Construction'/>
                            <br/><br/>
                            <input type='text' placeholder='Wall Construction'/>
                            <br/><br/>
                            <input type='text' placeholder='Floor Construction'/>
                            <br/><br/>
                            <input type='text' placeholder='Sprinklered'/>
                            <br/><br/>
                            <input type='text' placeholder='Deck Connection'/>
                            <br/><br/>
                            <input type='text' placeholder='Roof Covering'/>
                            <br/><br/>
                            <input type='text' placeholder='Size sqft'/>
                            <br/><br/>
                            <input type='text' placeholder='Number of Storeys'/>
                            <br/><br/>
                            <input type='text' placeholder='Year Built'/>
                            <br/><br/>
                            <input type='text' placeholder='Construction Type'/>
                            <br/><br/>
                            <input type='text' placeholder='Alarm'/>
                            <br/><br/>
                            <input type='text' placeholder='Mortgage'/>
                            <br/><br/>
                            <input type='submit' value='submit'/>
                        </form>
                        <br/>
                        <br/>
                        {this.showClientBuildingInfo()}

                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => state.ClientBuildingInfo,
ClientBuildingInfoStore.actionCreators)(makeRequest as any);