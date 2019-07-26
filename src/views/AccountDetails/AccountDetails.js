import React from 'react';
import { Container } from 'react-bootstrap';

import Spinner from '../../components/Spinner';
import Summary from '../../components/Summary';
import TransactionList from '../../components/TransactionList';

import { TRANSACTION_FILTERS } from '../../constants/transactions';

class AccountDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: TRANSACTION_FILTERS.ALL.value,
      current: 1,
    }
  }

  componentDidMount() {
    this.loadAccount();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.address !== this.props.match.params.address) {
      this.loadAccount();
    }
  }

  loadAccount(data) {
    this.props.loadAccount({
      address: this.props.match.params.address,
      filter: this.state.filter,
      ...data,
    });
  }

  onRadioChange = (e) => {
    this.setState({
      filter: parseInt(e.target.value),
    }, () => {
      this.loadAccount();
    });
  }

  handlePageClick = page => {
    const perPage = 50;
    let offset = Math.ceil(page * perPage);

    this.loadAccount({ offset });
    this.setState({
      current: page,
    });
  };

  render() {
    const { address, final_balance, n_tx, txs } = this.props.account;

    if(this.props.isLoading) return <Spinner />
    if(!address) return 'No data';

    return (
      <div className="AccountDetails">
        <Container>
          <Summary data={{ address, final_balance, n_tx }} />
          { txs ?
            <TransactionList
              currentFilter={this.state.filter}
              onRadioChange={this.onRadioChange}
              txs={txs}
              n_tx={n_tx}
              currentPage={this.state.current}
              handlePageClick={this.handlePageClick}
              address={address} />
           : null}
        </Container>
      </div>
    );
  }
}

export default AccountDetails;
