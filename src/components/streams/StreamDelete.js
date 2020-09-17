import React, { Component } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
import history from '../../history';

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    if (!this.props.stream) return null;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderContent = () => {
    if (!this.props.stream) return <div>Loading...</div>;
    return (
      <React.Fragment>
        <h4>{this.props.stream.title}</h4>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

const mapDispatchToProps = {
  deleteStream,
  fetchStream,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
