// ### 8. Adapter Pattern
// Adapter الگوئی است که به یک شیء اجازه می‌دهد با رابط دیگری سازگار شود.


class OldCalculator {
    operations(a, b, operation) {
      switch(operation) {
        case 'add':
          return a + b;
        case 'sub':
          return a - b;
        default:
          return NaN;
      }
    }
  }
  
  class NewCalculator {
    add(a, b) {
      return a + b;
    }
  
    sub(a, b) {
      return a - b;
    }
  }
  
  class CalculatorAdapter {
    constructor() {
      this.newCalculator = new NewCalculator();
    }
  
    operations(a, b, operation) {
      switch(operation) {
        case 'add':
          return this.newCalculator.add(a, b);
        case 'sub':
          return this.newCalculator.sub(a, b);
        default:
          return NaN;
      }
    }
  }
  
  const oldCalc = new OldCalculator();
  console.log(oldCalc.operations(10, 5, 'add')); // 15
  
  const adaptedCalc = new CalculatorAdapter();
  console.log(adaptedCalc.operations(10, 5, 'add')); // 15
  
  
  