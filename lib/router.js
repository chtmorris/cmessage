Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('cmessages') && Meteor.subscribe('dmessages');
    },
});

Router.map(function(){
  this.route('chatsides', {path: '/'});
});

Router.onBeforeAction('loading');
