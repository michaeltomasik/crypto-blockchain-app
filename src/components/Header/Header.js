import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

import './Header.css';

class Header extends React.Component {
  constructor(){
    super();

    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  searchAddress = () => {
    this.props.loadAccount({
      address: this.state.value,
    });
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-title">Blockchain Frontend App</div>
        <div className="Header-search">
          <InputGroup>
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
          </InputGroup>
        </div>
      </div>
    );
  }
}

export default Header;
