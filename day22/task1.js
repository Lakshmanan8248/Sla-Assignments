class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Method to calculate discounted price
  discountedPrice(discountPercent) {
    let discount = (this.price * discountPercent) / 100;
    return this.price - discount;
  }
}

// Example usage
const product1 = new Product("Laptop", 50000);
console.log(`Original Price: ₹${product1.price}`);
console.log(`Discounted Price (10% off): ₹${product1.discountedPrice(10)}`);
