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
    public state = {
        id:0,buildingType: "", street: "", city: "", postalCode: "", province: "", primaryOp: "", buildingConstr: "", wallConstr: "",
        floorConstr: "", sprinklered: "", deckConstr: "", roofCovering: "", sizeSqft: 0, storeyNumber: 0, yearBuilt: 0, constrType: "", alarm: "", mortgage: ""
    };
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
                            <button onClick={(e) => this.removeLocation(d.id)}>Remove</button>
                        </div>} />
                        <br/>
                    </div>
                )}
        </div>
        );
    }
    private removeLocation(e: any) {
        console.log("ID: " + e);
        this.setState({ id: e }, () => this.props.removeLocation(this.state.id));
    }
    private addLocations = (e: any) => {
        e.preventDefault();
        this.props.addLocations(this.state.buildingType, this.state.street, this.state.city, this.state.postalCode, this.state.province, this.state.primaryOp, this.state.buildingConstr, this.state.wallConstr,
            this.state.floorConstr, this.state.sprinklered, this.state.deckConstr, this.state.roofCovering, this.state.sizeSqft, this.state.storeyNumber, this.state.yearBuilt, this.state.constrType, this.state.alarm, this.state.mortgage);
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
                        <form onSubmit={this.addLocations}>
                            <input type='text' placeholder='Building Type'
                                onChange={(e) => this.setState({ buildingType: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Street'
                                onChange={(e) => this.setState({ street: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='City'
                                onChange={(e) => this.setState({ city: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Postal Code'
                                onChange={(e) => this.setState({ postalCode: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Province'
                                onChange={(e) => this.setState({ province: e.target.value })} />
                            <br /><br />
                            <input type='text' placeholder='Primary Operation'
                                onChange={(e) => this.setState({ primaryOp: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Building Construction'
                                onChange={(e) => this.setState({ buildingConstr: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Wall Construction'
                                onChange={(e) => this.setState({ wallConstr: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Floor Construction'
                                onChange={(e) => this.setState({ floorConstr: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Sprinklered'
                                onChange={(e) => this.setState({ sprinklered: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Deck Construction'
                                onChange={(e) => this.setState({ deckConstr: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Roof Covering'
                                onChange={(e) => this.setState({ roofCovering: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Size sqft'
                                onChange={(e) => this.setState({ sizeSqft: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Number of Storeys'
                                onChange={(e) => this.setState({ storeyNumber: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Year Built'
                                onChange={(e) => this.setState({ yearBuilt: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Construction Type'
                                onChange={(e) => this.setState({ constrType: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Alarm'
                                onChange={(e) => this.setState({ alarm: e.target.value })}/>
                            <br/><br/>
                            <input type='text' placeholder='Mortgage'
                                onChange={(e) => this.setState({ mortgage: e.target.value })}/>
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