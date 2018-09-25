import React from 'react';
import PropTypes from 'prop-types';
import {withRouter, NavLink, Link} from "react-router-dom";

import 'styles/css/style.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
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
      {this.props.builtInNav ? (
        <React.Fragment>
          <Navbar expand="md" dark>
            <Container>
              <Link className="navbar-brand" to="/">
                <span>React Boilerplate</span>
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
        </React.Fragment>
      ) : null}

      {this.props.children}
    </div>);
  }
}


Layout.defaultProps = {
  builtInNav: true,
};
Layout.propTypes = {
  builtInNav: PropTypes.boolean,
};

export default withRouter(Layout)
