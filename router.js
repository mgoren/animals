app.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('post', {path: '/post/:post_id'});
  this.resource('gorilla');
  this.resource('lion');
  this.resource('lizard');
  this.resource('warthog');
});
