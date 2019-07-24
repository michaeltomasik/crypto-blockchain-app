import React from 'react';
import { Table } from 'react-bootstrap';

class TransactionTable extends React.Component {
  constructor(){
    super();

    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Hash</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {this.props.transactions.map(transaction =>
            <tr>
              <td>{transaction.hash}</td>
              <td>{transaction.date}</td>
              <td>{`${transaction.inputs[0].prev_out.spent ? '-' : '+'} ${transaction.out[0].value}`}</td>
              {/* <td>{`${transaction.inputs[0].prev_out.spent ? '-' : '+'}
                ${transaction.inputs.reduce((prev, input) => prev + input.prev_out.value, 0)}`}
              </td> */}
            </tr>
          )}
        </tbody>
      </Table>
    );
  }
}

export default TransactionTable;
