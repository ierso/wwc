import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('projects', function() {
    this.route('edit', { path: '/edit/:project_id' });
    this.route('project', function(){
      this.route('share');
      this.route('add');
    });
  });
  this.route('cameras', function(){
    this.route('add');
    this.route('camera', { path: '/:camera_id' });
    this.route('edit', { path: '/edit/:camera_id' });
  });
  this.route('users', function(){
    this.route('add');
    this.route('user', { path: '/:user_id' });
    this.route('edit', { path: '/edit/:user_id' });
  });
  this.route('people', function(){
    this.route('person', {path: '/:id'});
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
