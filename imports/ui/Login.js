import React from 'react';

import {Link} from 'react-router'

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>Log in to ShrtLnk</h1>

        login form here

        <Link to="/signup">Create an account</Link>
      </div>
    );
  }
}
