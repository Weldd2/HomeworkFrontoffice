import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class Ex1Controller extends Controller {

  @tracked content;
  @tracked info;
  @tracked modified;
  MAX = 100;

  constructor() {
    super(...arguments);
    this.content = "";
    this.info = "";
  }

  get style() {

    if( this.size < 10) {
      return "danger";
    }
    else {
      if( this.size < 30) {
        return "warning";
      }
    }
    return "info";
  }

  get size() {
    return this.MAX - this.content.length;
  }

  @action
  clear () {
    this.content = "";
  }

  @action
  update() {
    this.modified = true;
  }

}