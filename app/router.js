import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('people', function(){
    this.route('person', {path: '/:id'});
  });
  this.route('users', function() {
    this.route('user', {path: '/:id'});
    this.route('add');
  });
  this.route('streams', function() {
    this.route('stream', function() {
      this.route('edit');
    });
    this.route('add');
  });

  this.route('cameras', function() {
    this.route('camera');
  });
});

export default Router;


//login
  //->forgot pw
//projects
  //->add project
  //project
    //->edit project
    //email this image
//cameras
  //->add camera
  //camera
    //->edit
//users
  //->add user
  //user
    //->edit
