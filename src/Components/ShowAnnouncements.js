import React, { Component } from 'react';
import firebase from 'firebase'
import {Row, Col} from 'react-bootstrap'


class ShowAnnouncements extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      allMesseges: [],
      allUsers: []
    };
  }

  render() {
    return (
      <Col>

      </Col>
    );
  }
}

export default ShowAnnouncements;
