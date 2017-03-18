import React from 'react';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
	componentDidMount() {
		this.clipboard = new Clipboard(this.refs.copy);

		this.clipboard.on('success', () => {
			console.log('it worked!')
		}).on('error', () => {
			alert('Browser doesn\'t support copying. Please copy the link manually.')
		});
	}

	componentWillUnmount() {
		this.clipboard.destroy();
	}

	render() {
		return (
			<div>
				<p><strong>{this.props.shortUrl}</strong></p>
				<p>{this.props.url}</p>
				<button ref="copy" data-clipboard-text={this.props.shortUrl}>Copy</button>
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