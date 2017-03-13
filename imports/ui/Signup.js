import React from 'react';

import {Link} from 'react-router';

export default class Signup extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign up for ShrtLnk</h1>

        signup form here

        <Link to="/">Already have an account?</Link>
      </div>
    )
  }
}
