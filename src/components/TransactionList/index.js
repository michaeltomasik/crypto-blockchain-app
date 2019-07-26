import React from 'react';
import { Row, Form } from 'react-bootstrap';
import Pagination from 'rc-pagination';

import TransactionTable from '../../components/TransactionTable';
import { TRANSACTION_FILTERS } from '../../constants/transactions';
import 'rc-pagination/assets/index.css';
import './TransactionList.css';

const elementsPerPage = 50;
const TransactionList = ({ currentPage, currentFilter, handlePageClick, onRadioChange, txs, n_tx, address }) =>
  <div>
    <h2>Transaction List</h2>
    <Row className="justify-content-md-end">
      <Form.Label className="TransactionList-radio">
        <b>Filters: </b>
      </Form.Label>
      <div className="TransactionList-filters">
        {Object.values(TRANSACTION_FILTERS).map(filter =>
          <Form.Check
            id={filter.label}
            key={filter.label}
            custom
            type="radio"
            label={filter.label}
            className="TransactionList-radio"
            checked={filter.value === currentFilter}
            value={filter.value}
            onChange={onRadioChange}
          />
        )}
      </div>
    </Row>
    <TransactionTable transactions={txs} address={address} />
    <div className="TransactionList-pagination">
      { currentFilter === TRANSACTION_FILTERS.ALL.value && n_tx > elementsPerPage ?
        <Pagination
          onChange={handlePageClick}
          pageSize={elementsPerPage}
          current={currentPage}
          total={n_tx - n_tx % elementsPerPage} // pagination bug - renders 1 additional page
        />
        : null}
    </div>
  </div>

export default TransactionList;