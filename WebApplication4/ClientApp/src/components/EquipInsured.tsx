// This is client side view for List of List of Equipments insured under the commercial policy for clients.
import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as EquipmentsStore from '../store/Equipments';
import { CustomAccordion } from './Accordion';
import NavMenu from './NavMenu';
// At runtime, Redux will merge together...
type EquipmentsProps =
    EquipmentsStore.EquipmentsState // ... state we've requested from the Redux store
    & typeof EquipmentsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;
class EquipInsured extends React.PureComponent<EquipmentsProps> {
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
                        <CustomAccordion key={index} title={d.model.toString()} content={<div><p>Model - {d.model}</p><p>Serial Number - {d.serialNumber}</p><p>Value - ${d.value}</p><p>Year - {d.year}</p></div>} />
                        <br />
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
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>List of Equipments insured under the commercial policy</h1>
                        <br />
                        <div>
                            {this.showEquipments()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.Equipments,
    EquipmentsStore.actionCreators
)(EquipInsured as any);
