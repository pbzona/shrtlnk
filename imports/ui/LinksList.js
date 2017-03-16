import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Meteor} from 'meteor/meteor';

import {Links} from '../api/links';

export default class LinksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
  }

  componentDidMount() {
    this.linksTracker = Tracker.autorun(() => {
      Meteor.subscribe('links');
      const links = Links.find().fetch();
      this.setState({links})
    });
    console.log('componentDidMount')
  }

  componentWillUnmount() {
    this.linksTracker.stop();
    console.log('componentWillUnmount')
  }

  renderLinksListItems() {
    return this.state.links.map((link) => {
      return <li key={link._id}>{link.url}</li>;
    })
  }

  render() {
    return (
      <div>
        <p>Links List</p>
        <ul>
          {this.renderLinksListItems()}
        </ul>
      </div>
    );
  }
}
