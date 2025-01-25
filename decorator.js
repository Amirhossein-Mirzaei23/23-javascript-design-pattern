// ### 5. Decorator Pattern
// Decorator الگوئی است که به شما اجازه می‌دهد عملکردی را به یک شیء اضافه کنید بدون تغییر کد اصلی آن شیء.


class Coffee {
    cost() {
      return 5;
    }
  }
  
  class MilkDecorator {
    constructor(coffee) {
      this.coffee = coffee;
    }
  
    cost() {
      return this.coffee.cost() + 2;
    }
  }
  
  const myCoffee = new Coffee();
  const myCoffeeWithMilk = new MilkDecorator(myCoffee);
  
  console.log(myCoffee.cost()); // 5
  console.log(myCoffeeWithMilk.cost()); // 7
  
  
  