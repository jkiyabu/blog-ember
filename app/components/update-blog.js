import Ember from 'ember';

export default Ember.Component.extend({
  updateBlog: false,
  actions: {
    updateFormShow() {
      this.set('updateBlog', true);
    },
    update(blog) {
      var params = {
        name: this.get('name'),
        title: this.get('title'),
        post: this.get('post'),
        img: this.get('img'),
        date: this.get('date'),
      };
      console.log(Ember.inspect(blog));
      this.set('updateBlog', false);
      this.sendAction('update', blog, params);
    }
  }
});
