app.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('gorilla');
  this.resource('lion');
  this.resource('lizard');
  this.resource('warthog');
});
