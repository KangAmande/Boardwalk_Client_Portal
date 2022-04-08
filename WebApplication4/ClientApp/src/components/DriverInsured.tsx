import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as DriversStore from '../store/Drivers';
import { CustomAccordion } from './Accordion';
import NavMenu from './NavMenu';
// At runtime, Redux will merge together...
type DriversProps =
    DriversStore.DriversState // ... state we've requested from the Redux store
    & typeof DriversStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string}>;
class DriverInsured extends React.PureComponent<DriversProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestDrivers(startDateIndex);
    }
    private showDrivers() {
        console.log(this.props.Driver);
        return (
        <div>
                {this.props.Driver.map((d: DriversStore.Drivers, index) =>
                    <div>
                        <CustomAccordion key={index} title={d.fullName.toString()} content={<div><p>License - {d.driverLicense}</p><p>License year - {d.licenseYear.toString()}</p></div>} />
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
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>List of Drivers insured under auto policy</h1>
                        <br />
                        <div>
                            {this.showDrivers()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.Drivers,
    DriversStore.actionCreators
)(DriverInsured as any);
