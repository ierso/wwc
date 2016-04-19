import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.store.findRecord('person', params.id);
  },

  actions: {
    editPerson: function(){
      var controller = this.get('controller');
      controller.set("isEditing", true);
    },
    updatePerson: function(model){
      var controller = this.get('controller');
      this.store.findRecord('person', controller.model.id).then(function(person) {
        console.log(controller.model.name);
        // person.setProperties({
        //   name: controller.model.name,
        //   email: controller.model.email
        // });
        person.set('name', controller.model.name);
        person.save();
      });
    }
  }

});
