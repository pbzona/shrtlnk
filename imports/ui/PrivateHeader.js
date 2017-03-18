import React from 'react';
import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = (props) => {
	return (
		<div>
			<h1>{props.title}</h1>
      <button onClick={() => Accounts.logout()}>Log Out</button>
		</div>
	);
};

PrivateHeader.propTypes = {
	title: React.PropTypes.string.isRequired
};

export default PrivateHeader;