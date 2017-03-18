import React from 'react';

import PrivateHeader from './PrivateHeader';
import LinksListFilters from './LinksListFilters';
import LinksList from './LinksList';
import AddLink from './AddLink';

export default Link = () => {
	return (
		<div>
      <PrivateHeader title="Your Links"/>
      <LinksListFilters/>
      <LinksList/>
      <AddLink/>
    </div>
	);
};
