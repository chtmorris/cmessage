Template.cmchat.events({
  'click #csend': function() {
    console.log("Charlie clicked");
    var message = $('#Cchat-message').val();
    Cmessages.insert({
      mssg: message
    });
  }
})

Template.dmchat.events({
  'click #dsend': function() {
    console.log("Daisy clicked");
    var message = $('#Dchat-message').val();
    Dmessages.insert({
      mssg: message
    });
  }
})
