import Service from '@ember/service';
import {dProducts, dPromos} from "HomeworkFrontOffice/data/datas";

export default class ProductServicesService extends Service {

  products;
  promos;

  constructor() {
    super(...arguments);
    this.products = dProducts;
    this.promos = dPromos;
  }


  get activeServices() {
    return dProducts.filterBy(this.products.active(true))
  }

  get countActive() {
    return count(this.activeServices);
  }

  get sumActive() {
    var temp = 0;
    this.activeServices.forEach(element => temp = temp+element.price);
    return temp;
  }
}
