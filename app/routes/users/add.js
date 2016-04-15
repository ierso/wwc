import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.peekAll('user');

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
        startDate: controller.startDate
      });
      // this.store.push(newUser);
    }
  }
});
