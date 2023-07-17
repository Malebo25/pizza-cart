function pizzaCounter() {
  return {
    smallPizza: 0,
    mediumPizza: 0,
    largePizza: 0,
    Total: 0,
    showCheckout: false,
    paymentAmount: 0,
    message: "",

    increment(size, amount) {
      if (size === "small") {
        this.smallPizza += amount;
        this.Total += amount;
      } else if (size === "medium") {
        this.mediumPizza += amount;
        this.Total += amount;
      } else if (size === "large") {
        this.largePizza += amount;
        this.Total += amount;
      }
    },
    decrement(size, amount) {
      if (size === "small") {
        this.smallPizza -= amount;
        this.Total -= amount;
      } else if (size === "medium") {
        this.mediumPizza -= amount;
        this.Total -= amount;
      } else if (size === "large") {
        this.largePizza -= amount;
        this.Total -= amount;
      }
    },
    checkout() {
      this.showCheckout = true;
      this.message = "";
    },
    processPayment() {
      const paymentAmount = parseFloat(this.paymentAmount);
      if (paymentAmount >= this.Total) {
        this.message = "Enjoy your pizzas!";
      } else {
        this.message = "Sorry, that is not enough money!";
      }
      setTimeout(() => {
        this.message;
        this.clearCart();
      }, 3000);
    },
    clearCart() {
      this.smallPizza = 0;
      this.mediumPizza = 0;
      this.largePizza = 0;
      this.Total = 0;
    },
  };
}

// ensure that AlpineJS is properly loaded
document.addEventListener("alpine:init", () => {
  Alpine.data("pizza", pizzaCounter);
});
