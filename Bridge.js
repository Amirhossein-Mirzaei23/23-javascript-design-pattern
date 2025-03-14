
// ### 21. Bridge Pattern
// Bridge الگوئی است که به شما اجازه می‌دهد از هم‌زیستی رابط‌ها و پیاده‌سازی‌های آن‌ها جداگانه استفاده کنید.


class Abstraction {
    constructor(implementor) {
      this.implementor = implementor;
    }
  
    operation() {
      this.implementor.operationImpl();
    }
  }
  
  class Implementor {
    operationImpl() {}
  }
  
  class ConcreteImplementorA extends Implementor {
    operationImpl() {
      console.log('ConcreteImplementorA operation implementation');
    }
  }
  
  class ConcreteImplementorB extends Implementor {
    operationImpl() {
      console.log('ConcreteImplementorB operation implementation');
    }
  }
  
  const implementorA = new ConcreteImplementorA();
  const implementorB = new ConcreteImplementorB();
  
  const abstractionA = new Abstraction(implementorA);
  abstractionA.operation(); // ConcreteImplementorA operation implementation
  
  const abstractionB = new Abstraction(implementorB);
  abstractionB.operation(); // ConcreteImplementorB operation implementation
  