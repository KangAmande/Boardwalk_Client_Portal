import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as EquipmentsStore from '../store/Equipments';
import { CustomAccordion } from './Accordion';
import NavMenu from './NavMenu';
type EquipmentsProps =
    EquipmentsStore.EquipmentsState // ... state we've requested from the Redux store
    & typeof EquipmentsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class scheduledEquipments extends React.PureComponent<EquipmentsProps> {
    public state = {
        year: 0,
        make: "",
        model: "",
        value: 0,
        serialNumber:""
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
        this.props.requestEquipments(startDateIndex);
    }
    private showEquipments() {
        console.log(this.props.Equipment);
        return (
            <div>
                {this.props.Equipment.map((d: EquipmentsStore.Equipments, index) =>
                    <div>
                        <CustomAccordion key={index} title={"Equipment " + d.id}
                            content={<div><p>{d.model}</p><p>{d.serialNumber}</p><p>{d.value}</p><p>{d.year}</p></div>} />
                        <br />
                    </div>
                )}
            </div>
        );
    }
    private addEquipments = (e:any) => {
        e.preventDefault();
        this.props.addEquipments(this.state.year);
    }
    public render() {
        return (
            <React.Fragment>
                <NavMenu />
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr />
                    </div>
                    <div className='col-8' id='mr1add'>
                        <h1>Add New Equipment</h1>
                        <form onSubmit={this.addEquipments}>
                            <input type='text' placeholder='Year'
                                onChange={(e) => this.setState({ year: e.target.value } )} />
                            <br /><br />
                            <input type='text' placeholder='Make'
                                onChange={(e) => this.setState({ make: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Model'
                                onChange={(e) => this.setState({ model: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Value'
                                onChange={(e) => this.setState({ value: e.target.value })}/>
                            <br /><br />
                            <input type='text' placeholder='Serial Number'
                                onChange={(e) => this.setState({ serialNumber: e.target.value })}/>
                            <br /><br />
                            <input type='submit' value='submit' />
                        </form>
                        <br />
                        <br />
                        {this.showEquipments()}
                    </div>


                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => state.Equipments,
    EquipmentsStore.actionCreators)(scheduledEquipments as any);
