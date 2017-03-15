import { BasketService } from './basket.service';
import { Product } from '../model/product';
import { BasketItem } from '../model/basketitem';

const product1: Product = new Product(1, 'Test Product 1', '', '', 1);
const product2: Product = new Product(2, 'Test Product 2', '', '', 2);

let service: BasketService;
let items: BasketItem[];

describe('Basket Service', () => {

  beforeEach(() => {
    service = new BasketService();
    // register an observer that listens to product changes and assigns the latest value to `items`
    service.getProducts().subscribe(x => items = x);
  });

  describe('', () => {

    it('should be able to add a product with default quantity 1', () => {
      // add a product
      // check that the product has been added with quantity 1
    });

    it('should be able to remove a product after adding it', () => {
      // add a product
      // remove a product
      // check that there are no items
    });

    it('should be empty after clearing', () => {
      // add some products
      // clear the basket
      // check that there are no items
    });

    it('should not allow negative quantities', () => {
      service.addProduct(product1);
      expect(() => service.changeProductQuantity(product1, -1)).toThrowError(RangeError);
    });

    it('should be able to change the quantity of a product', () => {
      // add a product
      // change the quantity of that product by calling the proper method
      // check that the quantity is the value you changed it to
    });

    it('should not change the quantity of any other product when changing the quantity of one product', () => {
      // add 2 distinct products
      // change the quantity of 1 of the products
      // chaeck the quantities of both products to make sure only 1 was changed
    });

    it('should correctly calculate the total items in the basket', () => {
      // add several distinct products
      // change their quantities
      // expect that the total quatity in the basket is euqal to the sum of the individual quantities
    });

    it('should correctly calculate the total price of the basket', () => {
      // add several distinct products
      // make sure the total price is euqal to the sum of the product's price times its quantity
    });

    it('should correctly calculate the total price of the basket when emptied', () => {
      // add some products
      // clear the basket
      // check that the total price is 0
    });

    it('should silently do nothing when a product is removed that is not in the basket', () => {
      // try to remove a product that was not added to the basket
    });

    it('should remove a product when its quantity is changed to 0', () => {
      // add a product
      // change its quantity to 0
      // expect that the total number of items in the basket is 0
    });
  });

});
