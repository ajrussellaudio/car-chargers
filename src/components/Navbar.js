import React from "react";
import {
  Navbar as Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  render() {
    return (
      <Nav>
        <UncontrolledDropdown>
          <DropdownToggle caret>Filter</DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Filter 1</DropdownItem>
            <DropdownItem>Filter 2</DropdownItem>
            <DropdownItem>Filter 3</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    );
  }
}

export default Navbar;
