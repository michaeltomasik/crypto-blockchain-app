import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { loadAccount } from '../../actions/account';

import AccountDetails from './AccountDetails';

const mapStateToProps = state => ({
  account: state.account,
  isLoading: state.loading.account,
});

const mapDispatchToProps = {
  loadAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountDetails));