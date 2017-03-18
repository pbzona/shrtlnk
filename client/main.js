import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';

import {routes, onAuthChange} from '../imports/routes/routes';

import '../imports/startup/simple-schema-config.js';

import {Links} from '../imports/api/links';

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
	Session.set('showVisible', true)
  ReactDOM.render(routes, document.getElementById('app'));
});
