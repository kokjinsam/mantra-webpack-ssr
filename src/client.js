import { FlowRouter } from 'meteor/kadira:flow-router-ssr';

import './app/main';

Meteor.startup(function() {
  FlowRouter.initialize();
});
