import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  liveVideo: DS.attr(),
  cameras: DS.attr(),
  status: DS.attr(),
  startDate: DS.attr()
});
