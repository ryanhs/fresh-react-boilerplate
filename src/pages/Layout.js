import React from 'react';
import {withRouter, NavLink, Link} from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { ListGroup, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Loading from 'components/Loading';

import 'styles/css/style.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  InputGroup,
  InputGroupAddon,
  Input,
  Container,
  Row,
  Col,
  Button
 } from 'reactstrap';

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    // process.env.REACT_APP_THEME
    return (<div>
      <Navbar expand="md" dark>
        <Container>
          <Link className="navbar-brand" to="/">
            <span>Voucher Pool</span>
          </Link>
          <NavbarToggler onClick={this.toggle} className="mr-2  "/>
          <Collapse isOpen={this.state.isOpen} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      <br/>

      {this.props.children}
    </div>);
  }
}

export default withRouter(Layout)
