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
    removePerson: function(id){
      this.store.findRecord('person', id).then(function(person) {
        person.deleteRecord();
        person.get('isDeleted'); // => true
        person.save(); // => DELETE to /posts/1
      });
    }
  }

});
