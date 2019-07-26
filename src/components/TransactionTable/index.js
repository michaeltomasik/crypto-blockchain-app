import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import satoshiBitcoin from 'satoshi-bitcoin';
import { Link } from 'react-router-dom';

import './TransactionTable.css';

class TransactionTable extends React.Component {
  constructor(){
    super();

    this.state = {
      value: '',
      toggledDetails: null,
    }
  }

  toggleDetails = (id) => {
    this.setState({
      toggledDetails: this.state.toggledDetails === id ? null : id,
    })
  }

  render() {
    return (
      <Table responsive="lg" className="TransactionTable">
        <thead>
          <tr>
            <th>Hash</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.transactions.map((transaction, index) => {
            const isSendingMoney = transaction.inputs.find(t => t.prev_out && t.prev_out.addr === this.props.address);
            const activeToggle = this.state.toggledDetails === index + 1;

            return (
              <Fragment key={`row-${index}`}>
                <tr
                  className={`row-transaction ${isSendingMoney ? 'row-send' : 'row-recieve'} ${activeToggle ? 'row-active' : ''}`}
                  onClick={() => { this.toggleDetails(index + 1) }}>
                    <td>{transaction.hash}</td>
                    <td>{new Date(transaction.time * 1000).toLocaleString()}</td>
                    <td>{isSendingMoney ?
                      `- ${satoshiBitcoin.toBitcoin(transaction.inputs
                          .filter(t => t.prev_out.addr === this.props.address)
                          .reduce((prev, current) => prev + current.prev_out.value, 0))}` :
                      `+ ${satoshiBitcoin.toBitcoin(transaction.out.filter(t => t.addr === this.props.address)
                        .reduce((prev, current) => prev + current.value, 0))}`} BTC</td>
                </tr>
                <tr className="TransactionTable-details">
                  {activeToggle ?
                    <Fragment>
                      <td>
                        <h5>From</h5>
                        {transaction.inputs.map(acc =>
                          <p>
                            <Link to={`/${acc.prev_out.addr}`}>{acc.prev_out.addr}</Link>
                            <p>{`(${satoshiBitcoin.toBitcoin(acc.prev_out.value)} BTC)`}</p>
                          </p>
                        )}
                      </td>
                      <td>
                        <img alt="arrow" src={`https://www.blockchain.com/Resources/arrow_right_${isSendingMoney ? 'red' : 'green'}.png`} />
                      </td>
                      <td>
                        <h5>To</h5>
                        {transaction.out.map(acc =>
                          <p>
                            <Link to={`/${acc.addr}`}>{acc.addr}</Link>
                            <p>{`(${satoshiBitcoin.toBitcoin(acc.value)} BTC)`}</p>
                          </p>
                        )}
                      </td>
                    </Fragment>
                  : null}
                </tr> 
              </Fragment>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default TransactionTable;
