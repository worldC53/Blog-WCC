Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/infos', function () {
  this.render('infos');
});
