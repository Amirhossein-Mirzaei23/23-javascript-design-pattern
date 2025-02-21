// 23 of most useful javascript design pattern
// ### 18. Composite Pattern
// Composite الگوئی است که به شما اجازه می‌دهد اشیاء را در ساختارهای درختی ترکیب کنید تا بتوانید با آن‌ها به عنوان اشیاء منفرد یا مجموعه‌ها کار کنید.


class Component {
  add(component) {}
  remove(component) {}
  display(indent) {}
}

class Leaf extends Component {
  constructor(name) {
    super();
    this.name = name;
  }

  display(indent) {
    console.log(`${indent}${this.name}`);
  }
}

class Composite extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    this.children = this.children.filter(child => child !== component);
  }

  display(indent) {
    console.log(`${indent}${this.name}`);
    this.children.forEach(child => child.display(indent + '--'));
  }
}

const root = new Composite('Root');
const leaf1 = new Leaf('Leaf 1');
const leaf2 = new Leaf('Leaf 2');

root.add(leaf1);
root.add(leaf2);

const subComposite = new Composite('SubComposite');
subComposite.add(new Leaf('Leaf 3'));

root.add(subComposite);

root.display('');
// Root
// --Leaf 1
// --Leaf 2
// --SubComposite
// ----Leaf 3


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


// ### 20. Abstract Factory Pattern
// Abstract Factory الگوئی است که یک رابط برای ایجاد خانواده‌های اشیاء مرتبط یا وابسته بدون مشخص کردن کلاس‌های دقیق آن‌ها فراهم می‌کند.


class Car {
  info() {
    return 'Car';
  }
}

class Truck {
  info() {
    return 'Truck';
  }
}

class CarFactory {
  createVehicle() {
    return new Car();
  }
}

class Factory {
  createVehicle() {
    return new Truck();
  }
}

class VehicleFactory {
  static getFactory(type) {
    switch(type) {
      case 'car':
        return new CarFactory();
      case 'truck':
        return new TruckFactory();
      default:
        return null;
    }
  }
}

const carFactory = VehicleFactory.getFactory('car');
const car = carFactory.createVehicle();
console.log(car.info()); // Car

const truckFactory = VehicleFactory.getFactory('truck');
const truck = truckFactory.createVehicle();
console.log(truck.info()); // Truck


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


// ### 22. Iterator Pattern
// Iterator الگوئی است که به شما اجازه می‌دهد به عناصر یک مجموعه به صورت متوالی دسترسی پیدا کنید بدون اینکه جزئیات پیاده‌سازی آن مجموعه را بدانید.


class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

const collection = [1, 2, 3, 4, 5];
const iterator = new Iterator(collection);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
// 1
// 2
// 3
// 4
// 5


// ### 23. Interpreter Pattern
// Interpreter الگوئی است که برای ارزیابی یا پردازش زبان‌ها و نمایش‌ها به کار می‌رود.


class Context {
  constructor(input) {
    this.input = input;
    this.output = 0;
  }

  getOutput() {
    return this.output;
  }
}

class Expression {
  interpret(context) {}
}

class TerminalExpression extends Expression {
  interpret(context) {
    context.output += context.input.length;
  }
}

class NonTerminalExpression extends Expression {
  interpret(context) {
    context.output += context.input.split(' ').length;
  }
}

const context1 = new Context('Hello World');
const terminalExpression = new TerminalExpression();
terminalExpression.interpret(context1);
console.log(context1.getOutput()); // 11

const context2 = new Context('Hello World');
const nonTerminalExpression = new NonTerminalExpression();
nonTerminalExpression.interpret(context2);
console.log(context2.getOutput()); // 2


// Source: https://www.freecodecamp.org/news/23-design-patterns-in-javascript/