import React from 'react';
// import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

import { Container, Row, Col } from 'reactstrap';

class PageHome extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            this is home page
          </Col>
        </Row>
      </Container>
    );
  }
}

PageHome.defaultProps = {
};
PageHome.propTypes = {
};

export default withRouter(PageHome);
