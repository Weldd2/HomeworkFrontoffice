import EmberRouter from '@ember/routing/router';
import config from 'homework-front-office/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('user');
  this.route('client', function () {
    this.route('details');
  });
  this.route('test-compo');
});
