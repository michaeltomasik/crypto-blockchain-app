import React from 'react';
import { Table } from 'react-bootstrap';
import satoshiBitcoin from 'satoshi-bitcoin';

import './TransactionTable.css';

class TransactionTable extends React.Component {
  constructor(){
    super();

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <Table responsive="lg">
        <thead>
          <tr>
            <th>Hash</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.transactions.map(transaction =>{
            const isSendingMoney = transaction.inputs.find(t => t.prev_out.addr === this.props.address);
            
            return (<tr className={isSendingMoney ? 'row-send' : 'row-recieve'}>
              <td>{transaction.hash}</td>
              <td>{transaction.date}</td>
              <td>{isSendingMoney ?
                `- ${satoshiBitcoin.toBitcoin(transaction.inputs
                    .filter(t => t.prev_out.addr === this.props.address)
                    .reduce((prev, current) => prev + current.prev_out.value, 0))}` :
                `+ ${satoshiBitcoin.toBitcoin(transaction.out.filter(t => t.addr === this.props.address)
                  .reduce((prev, current) => prev + current.value, 0))}`}</td>
            </tr>)
          })}
        </tbody>
      </Table>
    );
  }
}

export default TransactionTable;
