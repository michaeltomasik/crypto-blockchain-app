import React from 'react';
import { Table } from 'react-bootstrap';
import satoshiBitcoin from 'satoshi-bitcoin';

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
          {this.props.transactions.map((transaction, index) =>{
            const isSendingMoney = transaction.inputs.find(t => t.prev_out.addr === this.props.address);
            const activeToggle = this.state.toggledDetails === index+1;
            return (
              <>
                <tr key={`row-${index}`} className={`${isSendingMoney ? 'row-send' : 'row-recieve'}
                  ${activeToggle ? 'row-active' : null}`}
                  onClick={() => { this.toggleDetails(index+1) }}>
                  <td>{transaction.hash}</td>
                  <td>{new Date(transaction.time*1000).toLocaleString()}</td>
                  <td>{isSendingMoney ?
                    `- ${satoshiBitcoin.toBitcoin(transaction.inputs
                        .filter(t => t.prev_out.addr === this.props.address)
                        .reduce((prev, current) => prev + current.prev_out.value, 0))}` :
                    `+ ${satoshiBitcoin.toBitcoin(transaction.out.filter(t => t.addr === this.props.address)
                      .reduce((prev, current) => prev + current.value, 0))}`}</td>
                </tr>
                {activeToggle ?
                  <tr className="TransactionTable-Details">
                    <td>
                      <h5>From</h5>
                      {transaction.inputs.map(acc => <p>{acc.prev_out.addr}</p>)}
                    </td>
                    <td>
                      <div
                        className="arrow-right"
                        style={{ borderLeftColor: isSendingMoney ? 'red' : 'green' }}/>
                    </td>
                    <td>
                      <h5>To</h5>
                      {transaction.out.map(acc => <p>{acc.addr}</p>)}
                    </td>

                  </tr> :
                  null}
              </>)
          })}
        </tbody>
      </Table>
    );
  }
}

export default TransactionTable;
