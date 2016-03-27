if (Meteor.isClient) {
  // counter starts at 0
   



  Template.home.events({

  'click .bePart': function(event){

    alert("Want to be part?! Sign up be Admin and Share, post as much as you can or email me at laurentkouassi3@hotmail.com thats it!");
   sAlert.warning('Want to be part?! Share idea.Thats it', configOverwrite);


  }

 });
}
