import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions/index';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (userId, id) => {
    if (this.props.currentUserId === userId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${id}`} className="ui button primary">
            Edit
          </Link>
          <Link to={`/streams/delete/${id}`} className="ui button negative">
            Delete
          </Link>
        </div>
      );
    }
  };

  renderStreams = () => {
    const streams = this.props.streams;
    return streams.map(({ id, title, description, userId }) => {
      return (
        <div className="item" key={id}>
          {this.renderAdmin(userId, id)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link className="header" to={`/streams/${id}`}>{title}</Link>
            <div className="description">{description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link className="ui button primary" to="/streams/new">
            Create Stream
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderStreams()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
  streams: Object.values(state.streams),
});

const mapDispatchToProps = {
  fetchStreams,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
