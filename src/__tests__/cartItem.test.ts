import CartItem from "../js/class/cartItem";


describe('CartItem interface', () => {
  const exampleBuyable: CartItem = {
    id: 23,
    name: 'toys',
    price: 42,
  };

  test('Object properties of CartItem', () => {
    const correct = {
      id: 23,
      name: 'toys',
      price: 42,
    };

    expect(exampleBuyable).toEqual(correct);
  });

  test('CartItem interface properties exist', () => {
    expect(exampleBuyable).toHaveProperty('id');
    expect(exampleBuyable).toHaveProperty('name');
    expect(exampleBuyable).toHaveProperty('price');
  });
});