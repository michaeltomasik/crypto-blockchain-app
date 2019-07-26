import React from 'react';
import { withRouter } from 'react-router';
import { InputGroup, FormControl, Button, Navbar, Nav } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  searchAddress = () => {
    this.props.history.replace(`/${this.state.value}`);
  }

  render() {
    return (
      <Navbar className="Header" bg="light" expand="lg">
        <Navbar.Brand className="mr-auto" href="">Blockchain Frontend App</Navbar.Brand>
        <Nav>
          <FormControl
            autoFocus
            placeholder="Type account address"
            onChange={this.handleChange}
            value={this.state.value}
            aria-describedby="basic-addon2"
          />

          <InputGroup.Append>
            <Button onClick={this.searchAddress}>Search</Button>
          </InputGroup.Append>
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(Header);
