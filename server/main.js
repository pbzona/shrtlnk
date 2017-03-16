import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

import '../imports/api/users';
import '../imports/api/links';

import '../imports/startup/simple-schema-config.js';

Meteor.startup(() => {
  WebApp.connectHandlers.use((req, res, next) => {
    console.log('This is from my custom middleware');
    console.log(req.url, req.method, req.headers, req.query);
    //res.statusCode = 404;
    //res.setHeader('x-custom-header', 'Phil was here!!!')
    //res.write('<h1>This is my response from the middleware</h1>')
    //res.end();
    next();
  })
});
