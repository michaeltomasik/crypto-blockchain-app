import React from 'react';
import { FormControl, Button } from 'react-bootstrap';

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
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={this.state.value}
        />
        <Button onClick={this.searchAddress}>Search</Button>
      </div>
    );
  }
}

export default Header;
