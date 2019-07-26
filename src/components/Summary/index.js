import React from 'react';
import Identicon from 'react-identicons';
import satoshiBitcoin from 'satoshi-bitcoin';
import { Row, Form } from 'react-bootstrap';

import './Summary.css';

const Summary = ({ data: { address, final_balance, n_tx }}) =>
  <div className="Summary">
    <h2>Summary</h2>
    <Row>
      <div className="Summary-avatar">
        <Identicon string={address} size={200} />
      </div>
      <div className="Summary-info">
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
  </div>

export default Summary;