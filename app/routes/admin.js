import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },

  actions: {
    destroyBlog(blog) {
      blog.destroyRecord();
      this.transitionTo('admin');
    },

    saveBlog(params) {
      var newBlog = this.store.createRecord('blog', params);
      newBlog.save();
      this.transitionTo('admin');
    },

    update(blog, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          blog.set(key,params[key]);
        }
      });
      blog.save();
      this.transitionTo('admin');
    }
  }
});
