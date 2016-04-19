import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.findAll('user');

  },
  actions: {
    addUser: function(){
      var controller = this.get('controller');
      var newUser = this.store.createRecord('user', {
        name: controller.name,
        url: controller.url,
        liveVideo: controller.liveVideo,
        private: controller.private,
        cameras: controller.cameras,
        status: controller.status,
        startDate: controller.startDate,
      });

      // newUser.save();
      // this.store.push(newUser);
    },
    deleteUser: function(user){

    }
  }
});
