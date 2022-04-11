import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import homepageLayout from './Layout';
import Accountsidebar from './Accountsidebar'
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AccountsStore from '../store/Accounts';

type AccountsProps =
    AccountsStore.AccountsState// ... state we've requested from the Redux store
    & typeof AccountsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class Account extends React.PureComponent<AccountsProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAccounts(startDateIndex);
    }

    public render() {

        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Accountsidebar />
                    </div>
                    <div className='col-8'>
                        <p>Account Number:</p>
                        <div>
                            {
                                this.props.Account.map((pol: AccountsStore.Accounts) =>
                                    <p key={pol.id}>
                                        {pol.accountNumber}
                                    </p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect(
    (state: ApplicationState) => state.Accounts, // Selects which state properties are merged into the component's props
    AccountsStore.actionCreators
)(Account as any);
