import React from 'react';
import {Meteor} from 'meteor/meteor';
import Clipboard from 'clipboard';
import moment from 'moment';

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

	renderStats() {
		const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
		let visitedMessage = null;

		if (typeof this.props.lastVisitedAt === 'number') {
			let timeDifference = moment(this.props.lastVisitedAt).fromNow();
			visitedMessage = `(visited ${timeDifference})`;
		}

		return (
			<p className="item__message">{this.props.visitedCount} {visitMessage} {visitedMessage}</p>
		);
	}

	render() {
		return (
			<div className="item">
				<h2>{this.props.shortUrl}</h2>
				<p className="item__message">{this.props.url}</p>
				{this.renderStats()}
				<a className="button button--pill button--link" href={this.props.shortUrl} target="blank">
					Visit
				</a>
				<button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl}>
					{this.state.justCopied ? 'Copied!' : 'Copy'}
				</button>
				<button className="button button--pill" onClick={() => {
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
	lastVisitedAt: React.PropTypes.number.isRequired
};