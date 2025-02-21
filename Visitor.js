
// ### 14. Visitor Pattern
// Visitor الگوئی است که به شما اجازه می‌دهد بدون تغییر کلاس‌های اشیاء جدید، عملیات جدیدی به آن‌ها اضافه کنید.


class Visitor {
    visit(element) {}
  }
  
  class ConcreteVisitor1 extends Visitor {
    visit(element) {
      console.log('ConcreteVisitor1 visiting', element.name);
    }
  }
  
  class ConcreteVisitor2 extends Visitor {
    visit(element) {
      console.log('ConcreteVisitor2 visiting', element.name);
    }
  }
  
  class Element {
    constructor(name) {
      this.name = name;
    }
  
    accept(visitor) {
      visitor.visit(this);
    }
  }
  
  const element1 = new Element('Element1');
  const element2 = new Element('Element2');
  
  const visitor1 = new ConcreteVisitor1();
  const visitor2 = new ConcreteVisitor2();
  
  element1.accept(visitor1); // ConcreteVisitor1 visiting Element1
  element1.accept(visitor2); // ConcreteVisitor2 visiting Element1
  element2.accept(visitor1); // ConcreteVisitor1 visiting Element2
  element2.accept(visitor2); // ConcreteVisitor2 visiting Element2
  
  