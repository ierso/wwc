import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    alertUser:function(){
      alert('hi');
    }
  }
});
