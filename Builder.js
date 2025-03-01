// ### 19. Builder Pattern
// Builder الگوئی است که به شما اجازه می‌دهد اشیاء پیچیده را مرحله به مرحله بسازید.


class Product {
    constructor() {
      this.parts = [];
    }
  
    addPart(part) {
      this.parts.push(part);
    }
  
    showParts() {
      console.log(this.parts.join(', '));
    }
  }
  
  class Builder {
    buildPartA() {}
    buildPartB() {}
    getResult() {}
  }
  
  class ConcreteBuilder extends Builder {
    constructor() {
      super();
      this.product = new Product();
    }
  
    buildPartA() {
      this.product.addPart('PartA');
    }
  
    buildPartB() {
      this.product.addPart('PartB');
    }
  
    getResult() {
      return this.product;
    }
  }
  
  class Director {
    setBuilder(builder) {
      this.builder = builder;
    }
  
    construct() {
      this.builder.buildPartA();
      this.builder.buildPartB();
    }
  }
  
  const builder = new ConcreteBuilder();
  const director = new Director();
  
  director.setBuilder(builder);
  director.construct();
  
  const product = builder.getResult();
  product.showParts(); // PartA, PartB
  