import CartItem from "./cartItem";


export default class Cart {
  private items: CartItem[] = [];

  addItem(item: CartItem): void {
      this.items.push(item);
  }

  getItems(): CartItem[] {
      return this.items;
  }

  getTotalPrice(): number {
      return this.items.reduce((total, item) => total + item.price, 0);
  }

  getTotalPriceWithDiscount(discount: number): number {
      return this.items.reduce((total, item) => total + item.price * (1 - discount / 100), 0);
  }

  removeItemById(id: number): void {
      this.items = this.items.filter(item => item.id !== id);
  }
}