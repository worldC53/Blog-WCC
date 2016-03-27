Meteor.startup(function () {

    sAlert.config({
        effect: 'bouncyFlip',
        position: 'top-right',
        timeout: 5000,
        html: false,
        onRouteClose: true,
        stack: true,
        
        offset: 0, 
        beep: false,
        onClose: _.noop //
    
    });

});
