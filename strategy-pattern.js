// ### 4. Strategy Pattern
// Strategy الگوئی است که به شما اجازه می‌دهد الگوریتم‌ها را در زمان اجرا تعویض کنید.


class Context {
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    executeStrategy(a, b) {
      return this.strategy.execute(a, b);
    }
  }
  
  class AddStrategy {
    execute(a, b) {
      return a + b;
    }
  }
  
  class SubtractStrategy {
    execute(a, b) {
      return a - b;
    }
  }
  
  const context = new Context();
  context.setStrategy(new AddStrategy());
  console.log(context.executeStrategy(5, 3)); // 8
  
  context.setStrategy(new SubtractStrategy());
  console.log(context.executeStrategy(5, 3)); // 2