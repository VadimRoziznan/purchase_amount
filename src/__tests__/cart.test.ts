import Cart from "../js/class/cart";


describe('Cart class functions', () => {
  let cart: Cart;

  beforeEach(() => {
      cart = new Cart();
      cart.addItem({ id: 1, name: 'Product 1', price: 10 });
      cart.addItem({ id: 2, name: 'Product 2', price: 20 });
  });

  test('getTotalPrice function', () => {
      expect(cart.getTotalPrice()).toBe(30);
  });

  test('getTotalPriceWithDiscount function', () => {
      expect(cart.getTotalPriceWithDiscount(10)).toBe(27);
  });

  test('removeItemById function', () => {
      cart.removeItemById(1);
      expect(cart.getItems()).toHaveLength(1);
      expect(cart.getItems()[0].id).toBe(2);
  });
});
