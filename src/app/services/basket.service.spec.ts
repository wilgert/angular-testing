import {BasketService} from './basket.service';
import {Product} from '../model/product';
import {BasketItem} from '../model/basketitem';

const product1: Product = new Product(1, 'Test Product 1', '', '', 1);
const product2: Product = new Product(2, 'Test Product 2', '', '', 2);

let service: BasketService;
let items: BasketItem[];

describe('Basket Service', () => {

    beforeEach(() => {
        service = new BasketService();
        service.getProducts().subscribe(x => items = x);
    });

    describe('', () => {

        it('should be able to add a product with default quantity 1', () => {
            service.addProduct(product1);
            expect(items[0].quantity).toBe(1);
        });

        it('should be able to add a product with default quantity 1', () => {
            service.addProduct(product1);
            expect(items.length).toBe(1);
            expect(items[0].quantity).toBe(1);
        });

        it('should be able to remove a product after adding it', () => {
            service.addProduct(product1);
            service.removeProduct(product1);
            expect(items.length).toBe(0);
        });

        it('should be empty after clearing', () => {
            service.addProduct(product1);
            service.addProduct(product2);
            expect(items.length).toBe(2);
            service.clearBasket();
            expect(items.length).toBe(0);
        });

        it('should not allow negative quantities', () => {
            service.addProduct(product1);
            expect(() => service.changeProductQuantity(product1, -1)).toThrowError(RangeError);
        });

        it('should be able to change the quantity of a product', () => {
            service.addProduct(product1);
            service.changeProductQuantity(product1, 5);
            expect(items[0].quantity).toBe(5);
        });

        it('should not change the quantity of any other product when changing the quantity of one product', () => {
            service.addProduct(product1);
            service.addProduct(product2);
            service.changeProductQuantity(product1, 10);
            expect(items[0].quantity).toBe(10);
            expect(items[1].quantity).toBe(1);
        });

        it('should correctly calculate the total items in the basket', () => {
            service.addProduct(product1);
            service.changeProductQuantity(product1, 3);
            service.addProduct(product2);
            service.changeProductQuantity(product2, 5);
            expect(service.getTotalItems()).toBe(8);
        });

        it('should correctly calculate the total price of the basket', () => {
            service.addProduct(product1);
            service.changeProductQuantity(product1, 3);
            service.addProduct(product2);
            service.changeProductQuantity(product2, 5);
            expect(service.getTotalPrice()).toBe(13);
        });

        it('should correctly calculate the total price of the basket when emptied', () => {
            service.addProduct(product1);
            service.addProduct(product2);
            service.removeProduct(product1);
            service.changeProductQuantity(product2, 0);
            expect(service.getTotalPrice()).toBe(0);
        });

        it('should silently do nothing when a product is removed that is not in the basket', () => {
            service.removeProduct(product1);
        });

        it('should remove a product when its quantity is changed to 0', () => {
            service.addProduct(product1);
            service.changeProductQuantity(product1, 0);
            expect(service.getTotalItems()).toBe(0);
        });
    });

});
