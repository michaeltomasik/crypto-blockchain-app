import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class AccountDetails extends React.Component {
  render() {
    const { address, final_balance } = this.props.account;
    console.log(this.props)
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>AVATAR</Col>
            <Col>
              <Row>{address}</Row>
              <Row>{final_balance}</Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AccountDetails;
