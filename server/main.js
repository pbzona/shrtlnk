import { Meteor } from 'meteor/meteor';

import '../imports/api/users';
import '../imports/api/links';

Meteor.startup(() => {
  Meteor.call('greetUser', 'phil-server', (err, res) => {
    console.log('args: ', err, res)
  })
});
