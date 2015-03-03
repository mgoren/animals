app.PostsController = Ember.Controller.extend({
  postID: 0,
  currentPost: function() {
    return posts[this.postID];
  }.property('postID'),
  actions: {
    nextPost: function() {
      this.set('postID', this.postID+1);
      if(this.postID>posts.length - 1) {this.set('postID', 0);}
    },
    previousPost: function() {
      this.set('postID', this.postID-1);
      if(this.postID < 0) {this.set('postID', posts.length -1);}
    }
  }
});
