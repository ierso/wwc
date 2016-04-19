import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: '',
  host: 'https://wwc-api.herokuapp.com'
});
