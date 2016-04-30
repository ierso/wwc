import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    addUser: function(){
      var controller = this.controller;

      var createdUser = this.store.createRecord('user',{
        first: controller.first,
        last: controller.last,
        email: controller.email,
        role: controller.role,
        password: controller.password
      });
      createdUser.save();

    }
  }
});
