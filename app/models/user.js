import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  first: DS.attr('string'),
  last: DS.attr('string'),
  role: DS.attr('string'),
  password: DS.attr('string')
});
