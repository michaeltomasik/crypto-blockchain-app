import { connect } from 'react-redux';
import AccountDetails from './AccountDetails';

const mapStateToProps = state => ({
  account: state.account,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetails);