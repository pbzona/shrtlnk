import React from 'react';
import {Meteor} from 'meteor/meteor';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			justCopied: false
		};
	}

	componentDidMount() {
		this.clipboard = new Clipboard(this.refs.copy);

		this.clipboard.on('success', () => {
			this.setState({
				justCopied: true
			});

			setTimeout(() => {
				this.setState({
					justCopied: false
				});
			}, 500);
		}).on('error', () => {
			alert('Unable to copy. Please copy the link manually.');
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
				<p>{this.props.visitedCount} - {this.props.lastVisitedAt}</p>
				<button ref="copy" data-clipboard-text={this.props.shortUrl}>
					{this.state.justCopied ? 'Copied!' : 'Copy'}
				</button>
				<button onClick={() => {
					Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
				}}>
					{this.props.visible ? 'Hide' : 'Unhide'}
				</button>
			</div>
		);
	}
}

LinksListItem.propTypes = {
	_id: React.PropTypes.string.isRequired,
	userId: React.PropTypes.string.isRequired,
	url: React.PropTypes.string.isRequired,
	visible: React.PropTypes.bool.isRequired,
	shortUrl: React.PropTypes.string.isRequired,
	visitedCount: React.PropTypes.number.isRequired,
	lastVisitedAt: React.PropTypes.number
};