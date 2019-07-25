import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import Identicon from 'react-identicons';
import satoshiBitcoin from 'satoshi-bitcoin';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import TransactionTable from '../../components/TransactionTable';
import Spinner from '../../components/Spinner';

import { TRANSACTION_FILTERS } from '../../constants/transactions';

import './AccountDetails.css';

class AccountDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      filter: TRANSACTION_FILTERS.ALL,
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
      filter: e.target.value,
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
          <h2>Summary</h2>
          <Row>
            <div className="AccountDetails-avatar">
              <Identicon string={address} size={200} />
            </div>
            <div className="AccountDetails-summary">
              <div>
                <Form.Label><b>Address</b></Form.Label>
                <p>{address}</p>
              </div>
              <div>
                <Form.Label><b>Balance</b></Form.Label>
                <p>{satoshiBitcoin.toBitcoin(final_balance)} BTC</p>
              </div>
              <div>
                <Form.Label><b>Transactions made</b></Form.Label>
                <p>{n_tx}</p>
              </div>
            </div>
          </Row>
          
          { txs ?
            <div>
              <h2>Transaction List</h2>
              <Row className="justify-content-md-end">
                <div>
                  <Form.Label className="AccountDetails-radio"><b>Filters: </b></Form.Label>
                  <div className="AccountDetails-filters">
                    <Form.Check
                      custom
                      type="radio"
                      label="All"
                      className="AccountDetails-radio"
                      checked={TRANSACTION_FILTERS.ALL == this.state.filter}
                      value={TRANSACTION_FILTERS.ALL}
                      onChange={this.onRadioChange}
                      name="formHorizontalRadios"
                      id="123asd"
                    />
                    <Form.Check
                      custom
                      type="radio"
                      label="Sent"
                      className="AccountDetails-radio"
                      value={TRANSACTION_FILTERS.SENT}
                      checked={TRANSACTION_FILTERS.SENT == this.state.filter}
                      onChange={this.onRadioChange}
                      name="formHorizontalRadios"
                      id="123fsdgasd"
                    />
                    <Form.Check
                      custom
                      type="radio"
                      label="Received"
                      className="AccountDetails-radio"
                      value={TRANSACTION_FILTERS.RECEIVED}
                      checked={TRANSACTION_FILTERS.RECEIVED == this.state.filter}
                      onChange={this.onRadioChange}
                      name="formHorizontalRadios"
                      id="123dfdsasd"
                    />
                  </div>
                </div>
              </Row>
              <TransactionTable transactions={txs} address={this.props.match.params.address} />
              <div className="AccountDetails-pagination">
                { this.state.filter === TRANSACTION_FILTERS.ALL ?
                  <Pagination
                    onChange={this.handlePageClick}
                    pageSize={50}
                    current={this.state.current}
                    total={n_tx-n_tx%50} // pagination bug - renders 1 additional page
                  />
                  : null}
              </div>
            </div> : null}
        </Container>
      </div>
    );
  }
}

export default AccountDetails;
