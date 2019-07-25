import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { loadAccount } from '../../actions/account';
import Header from './Header';

const mapStateToProps = state => ({
  test: [],
});

const mapDispatchToProps = {
  loadAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));