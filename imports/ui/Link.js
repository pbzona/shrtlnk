import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksList from './LinksList';
import AddLink from './AddLink';

export default Link = () => {
	return (
		<div>
      <PrivateHeader title="Your Links"/>
      <LinksList/>
      <AddLink/>
    </div>
	);
};
