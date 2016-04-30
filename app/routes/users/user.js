import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('user', params.id);
  },
  actions: {
    updatePerson: function(model){
      var controller = this.get('controller');
      this.store.findRecord('person', controller.model.id).then(function(person) {

        person.set('name', controller.model.name);
        person.save();
      });
    },
    removeUser: function(model){
      model.destroyRecord();
    }
  }
});
