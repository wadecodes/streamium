import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '769410358677-ntc30039ivvr2cnr7sf7n28c71tngake.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        })
        .catch((err) => console.log(err));
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onAuthRequest = () => {
    const isSignedIn = this.props.isSignedIn;
    if (!isSignedIn) {
      this.auth.signIn();
    } else {
      this.auth.signOut();
    }
  };

  renderAuthButton = () => {
    const isSignedIn = this.props.isSignedIn;
    if (isSignedIn === null) {
      return null;
    } else {
      const text = isSignedIn ? 'Sign Out' : 'Sign In with Google';
      return (
        <button onClick={this.onAuthRequest} className="ui red google button">
          <i className="google icon" />
          {text}
        </button>
      );
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

const mapDispatchToProps = { signIn, signOut };

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
