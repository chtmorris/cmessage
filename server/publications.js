Meteor.publish('cmessages', function(){
  return Cmessages.find();
})

Meteor.publish('dmessages', function(){
  return Dmessages.find();
})
