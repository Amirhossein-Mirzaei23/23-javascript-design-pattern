// 23 of most useful javascript design pattern





// ### 13. Template Method Pattern
// Template Method الگوئی است که اسکلت یک الگوریتم را در یک متد پایه تعریف می‌کند، در حالی که پیاده‌سازی برخی مراحل به زیرکلاس‌ها محول می‌شود.


class Game {
  play() {
    this.initialize();
    this.startPlay();
    this.endPlay();
  }

  initialize() {}
  startPlay() {}
  endPlay() {}
}

class Cricket extends Game {
  initialize() {
    console.log('Cricket Game Initialized!');
  }

  startPlay() {
    console.log('Cricket Game Started!');
  }

  endPlay() {
    console.log('Cricket Game Finished!');
  }
}

class Football extends Game {
  initialize() {
    console.log('Football Game Initialized!');
  }

  startPlay() {
    console.log('Football Game Started!');
  }

  endPlay() {
    console.log('Football Game Finished!');
  }
}

const cricket = new Cricket();
cricket.play();
// Cricket Game Initialized!
// Cricket Game Started!
// Cricket Game Finished!

const football = new Football();
football.play();
// Football Game Initialized!
// Football Game Started!
// Football Game Finished!


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


// ### 15. Chain of Responsibility Pattern
// Chain of Responsibility الگوئی است که به شما اجازه می‌دهد درخواست را از طریق یک زنجیره از دریافت‌کنندگان عبور دهید تا زمانی که یکی از آن‌ها درخواست را پردازش کند.


class Handler {
  setNext(handler) {
    this.nextHandler = handler;
  }

  handle(request) {
    if (this.nextHandler) {
      this.nextHandler.handle(request);
    }
  }
}

class ConcreteHandler1 extends Handler {
  handle(request) {
    if (request === 'A') {
      console.log('ConcreteHandler1 handling request A');
    } else {
      super.handle(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  handle(request) {
    if (request === 'B') {
      console.log('ConcreteHandler2 handling request B');
    } else {
      super.handle(request);
    }
  }
}

const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

handler1.setNext(handler2);

handler1.handle('A'); // ConcreteHandler1 handling request A
handler1.handle('B'); // ConcreteHandler2 handling request B
handler1.handle('C'); // no output


// ### 16. Flyweight Pattern
// Flyweight الگوئی است که به شما اجازه می‌دهد به‌صورت مؤثر از تعداد زیادی اشیاء کوچک استفاده کنید.


class Flyweight {
  constructor(sharedState) {
    this.sharedState = sharedState;
  }

  operation(uniqueState) {
    console.log(`Flyweight: Displaying shared (${this.sharedState}) and unique (${uniqueState}) state.`);
  }
}

class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(sharedState) {
    if (!(sharedState in this.flyweights)) {
      this.flyweights[sharedState] = new Flyweight(sharedState);
    }
    return this.flyweights[sharedState];
  }
}

const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('Shared1');
const flyweight2 = factory.getFlyweight('Shared2');
const flyweight3 = factory.getFlyweight('Shared1');

flyweight1.operation('Unique1'); // Flyweight: Displaying shared (Shared1) and unique (Unique1) state.
flyweight2.operation('Unique2'); // Flyweight: Displaying shared (Shared2) and unique (Unique2) state.
flyweight3.operation('Unique3'); // Flyweight: Displaying shared (Shared1) and unique (Unique3) state.

console.log(flyweight1 === flyweight3); // true


// ### 17. Proxy Pattern
// Proxy الگوئی است که به شما اجازه می‌دهد یک شیء را با یک شیء جایگزین کنید که رفتار شیء اصلی را کنترل می‌کند.


class RealSubject {
  request() {
    console.log('RealSubject: Handling request.');
  }
}

class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
      this.logAccess();
    }
  }

  checkAccess() {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  logAccess() {
    console.log('Proxy: Logging the time of request.');
  }
}

const realSubject = new RealSubject();
const proxy = new Proxy(realSubject);

proxy.request();
// Proxy: Checking access prior to firing a real request.
// RealSubject: Handling request.
// Proxy: Logging the time of request.


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