Template.cmchat.helpers({
  cmessages: function() {
    return Cmessages.find(); }
});

Template.dmchat.helpers({
  dmessages: function() {
    return Dmessages.find(); }
});
