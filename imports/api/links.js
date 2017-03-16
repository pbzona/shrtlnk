import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Links = new Mongo.Collection('links');

if (Meteor.isServer) {
  Meteor.publish('links', function() {
    return Links.find({userId: this.userId});
  })
}

Meteor.methods({
  greetUser(name) {
    console.log('greetUser is running')

    if (!name) {
      throw new Meteor.Error('invalid-argument', 'name is required')
    }

    return `hello ${name}`
  },
  addNumbers(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Meteor.Error('invalid-argument', 'both args must be numbers')
    }

    return a + b
  }
})
