import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('person');

  },
  actions: {
    addPerson: function(){
      Ember.Logger.log( this.controllerFor('people.index').name);
      var controller = this.controllerFor('people.index');
      var newPerson = this.store.createRecord('person',{
        name: controller.name,
        email: controller.email
      });
      newPerson.save();
    },
    removePerson: function(person){
        person.destroyRecord();
    }
  }

});
