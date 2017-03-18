import React from 'react';

export default class LinksListItem extends React.Component {
	render() {
		return (
			<div>
				<p><strong>{this.props.shortUrl}</strong></p>
				<p>{this.props.url}</p>
			</div>
		);
	}
}

LinksListItem.propTypes = {
	_id: React.PropTypes.string.isRequired,
	userId: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired,
	shortUrl: React.PropTypes.string.isRequired,
};