import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions/index';
import StreamForm from './StreamForm';

export class StreamCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <StreamForm onSubmit={this.onSubmit} />;
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
