import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('person');

  },
  actions: {
    addPerson: function(){
      var controller = this.get('controller');
      var newPerson = this.store.createRecord('person',{
        name: controller.name,
        email: controller.email
      });
      newPerson.save();
    },
    removePerson: function(id){
      this.store.findRecord('person', id).then(function(person) {
      person.destroyRecord();
      });
    }
  }

});
