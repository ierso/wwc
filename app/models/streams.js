import DS from 'ember-data';

export default DS.Model.extend({
  streamName: DS.attr('string'),
  cameraId: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  locZip: DS.attr('number'),
  liveStreamEnabled: DS.attr('boolean'),
  isPrivate: DS.attr('boolean'),
  users: DS.attr('string')
});
