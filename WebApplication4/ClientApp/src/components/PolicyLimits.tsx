import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as PoliciesStore from '../store/Policies';
import { CustomAccordion } from './Accordion';
import NavMenu from './NavMenu';
// At runtime, Redux will merge together...
type PoliciesProps =
    PoliciesStore.PoliciesState // ... state we've requested from the Redux store
    & typeof PoliciesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string}>;
class PolicyLimits extends React.PureComponent<PoliciesProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestPolicies(startDateIndex);
    }
    private showPolicies() {
        console.log(this.props.Policy);
        return (
            <div>
                {this.props.Policy.map((d: PoliciesStore.Policies) =>
                    <div>
                        <CustomAccordion key={d.id} title={"Policy " + d.description.toString()} content={<div><p>Created By {d.createdBy}</p></div>} />
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
                        <h1>Primary Policy Limits and Deductibles</h1>
                        <br />
                        <div>
                            {this.showPolicies()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.Policies,
    PoliciesStore.actionCreators
)(PolicyLimits as any);
