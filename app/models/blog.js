import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  title: DS.attr(),
  post: DS.attr(),
  img: DS.attr(),
  date: DS.attr()
});
