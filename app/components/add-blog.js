import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    blogFormShow() {
      this.set('addNewBlog', true);
    },

    saveBlog() {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        post: this.get('post'),
        img: this.get('img'),
        date: this.get('date'),
      };
      this.set('addNewBlog', false);
      this.sendAction('saveBlog', params);
    }
  }
});
