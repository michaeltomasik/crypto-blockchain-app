import { connect } from 'react-redux';
import { loadAccount } from '../../actions/account';
import Header from './Header';

const mapStateToProps = state => ({
  test: [],
});

const mapDispatchToProps = {
  loadAccount,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);