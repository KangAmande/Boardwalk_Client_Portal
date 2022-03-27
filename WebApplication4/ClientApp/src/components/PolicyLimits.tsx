import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as PoliciesStore from '../store/Policies';

// At runtime, Redux will merge together...
type PoliciesProps =
    PoliciesStore.PoliciesState // ... state we've requested from the Redux store
    & typeof PoliciesStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{}>;
class PolicyLimits extends React.PureComponent<PoliciesProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        this.props.requestPolicies();
    }
    public render() {
        console.log(this.props.Policy);
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>Primary Policy Limits and Deductibles</h1>
                        <br />
                        <div>
                            {this.props.Policy.map((pol: PoliciesStore.Policies) =>
                                <p key={pol.Id}>
                                    {pol.Description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect(
    (state: ApplicationState) => state.Policies, // Selects which state properties are merged into the component's props
    PoliciesStore.actionCreators // Selects which action creators are merged into the component's props
)(PolicyLimits as any);
