طراحی الگوها (Design Patterns) روش‌هایی برای حل مسائل متداول در توسعه نرم‌افزار هستند. در ادامه ۲۳ تا از متداول‌ترین دیزاین پترن‌های JavaScript به همراه توضیحات و مثال‌هایی از کلاس‌ها آورده شده‌اند:

### 1. Singleton Pattern
Singleton یک الگو است که اجازه می‌دهد فقط یک نمونه از یک کلاس ایجاد شود.

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.value = Math.random();
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
```

### 2. Factory Pattern
Factory یک الگو است که به تولید اشیاء بدون مشخص کردن کلاس دقیق آن‌ها کمک می‌کند.

```javascript
class Car {
  constructor() {
    this.type = "Car";
  }
}

class Truck {
  constructor() {
    this.type = "Truck";
  }
}

class VehicleFactory {
  createVehicle(type) {
    switch(type) {
      case 'car':
        return new Car();
      case 'truck':
        return new Truck();
      default:
        return null;
    }
  }
}

const factory = new VehicleFactory();
const car = factory.createVehicle('car');
console.log(car.type); // Car
```

### 3. Observer Pattern
Observer الگوئی است که به یک شی اجازه می‌دهد تغییرات در شیء دیگری را مشاهده و به آن‌ها واکنش نشان دهد.

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log(`Observer received data: ${data}`);
  }
}

const subject = new Subject();
const observer = new Observer();

subject.subscribe(observer);
subject.notify('Hello, World!'); // Observer received data: Hello, World!
```

### 4. Strategy Pattern
Strategy الگوئی است که به شما اجازه می‌دهد الگوریتم‌ها را در زمان اجرا تعویض کنید.

```javascript
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
```

### 5. Decorator Pattern
Decorator الگوئی است که به شما اجازه می‌دهد عملکردی را به یک شیء اضافه کنید بدون تغییر کد اصلی آن شیء.

```javascript
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
```

### 6. Prototype Pattern
Prototype الگوئی است که اجازه می‌دهد اشیاء جدید از نمونه‌های موجود ایجاد شوند.

```javascript
class Vehicle {
  constructor(type, model) {
    this.type = type;
    this.model = model;
  }

  clone() {
    return new Vehicle(this.type, this.model);
  }
}

const car = new Vehicle('Car', 'Tesla');
const carClone = car.clone();

console.log(carClone); // Vehicle { type: 'Car', model: 'Tesla' }
```

### 7. Command Pattern
Command الگوئی است که یک عملیات را در یک شیء به عنوان یک فرمان (Command) محصور می‌کند.

```javascript
class Light {
  turnOn() {
    console.log('Light is on');
  }

  turnOff() {
    console.log('Light is off');
  }
}

class TurnOnCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand {
  constructor(light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

class RemoteControl {
  setCommand(command) {
    this.command = command;
  }

  pressButton() {
    this.command.execute();
  }
}

const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.setCommand(turnOn);
remote.pressButton(); // Light is on

remote.setCommand(turnOff);
remote.pressButton(); // Light is off
```

### 8. Adapter Pattern
Adapter الگوئی است که به یک شیء اجازه می‌دهد با رابط دیگری سازگار شود.

```javascript
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
```

### 9. Facade Pattern
Facade الگوئی است که یک رابط ساده به مجموعه‌ای از رابط‌های پیچیده فراهم می‌کند.

```javascript
class Engine {
  start() {
    console.log('Engine started');
  }
}

class Transmission {
  setGear(gear) {
    console.log(`Gear set to ${gear}`);
  }
}

class CarFacade {
  constructor() {
    this.engine = new Engine();
    this.transmission = new Transmission();
  }

  drive() {
    this.engine.start();
    this.transmission.setGear(1);
    console.log('Car is driving');
  }
}

const car = new CarFacade();
car.drive();
// Engine started
// Gear set to 1
// Car is driving
```

### 10. Mediator Pattern
Mediator الگوئی است که به اشیاء اجازه می‌دهد بدون آگاهی مستقیم از یکدیگر با هم ارتباط برقرار کنند.

```javascript
class ChatRoom {
  showMessage(user, message) {
    const time = new Date().toLocaleTimeString();
    const sender = user.getName();

    console.log(`[${time}] ${sender}: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatRoom.showMessage(this, message);
  }
}

const chatRoom = new ChatRoom();

const john = new User('John', chatRoom);
const jane = new User('Jane', chatRoom);

john.send('Hello Jane!'); 
jane.send('Hi John!');
// [10:00:00 AM] John: Hello Jane!
// [10:00:01 AM] Jane: Hi John!
```

### 11. Memento Pattern
Memento الگوئی است که وضعیت داخلی یک شیء را بدون افشای جزئیات داخلی آن ذخیره می‌کند.

```javascript
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}

class Originator {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  saveStateToMemento() {
    return new Memento(this.state);
  }

  getStateFromMemento(memento) {
    this.state = memento.getState();
  }
}

class Caretaker {
  constructor() {
    this.mementoList = [];
  }

  add(memento) {
    this.mementoList.push(memento);
  }

  get(index) {
    return this.mementoList[index];
  }
}

const originator = new Originator();
const caretaker = new Caretaker();

originator.setState('State1');
originator.setState('State2');
caretaker.add(originator.saveStateToMemento());

originator.setState('State3');
caretaker.add(originator.saveStateToMemento());

originator.setState('State4');

console.log('Current State:', originator.state); // Current State: State4
originator.getStateFromMemento(caretaker.get(0));
console.log('First saved State:', originator.state); // First saved State: State2
originator.getStateFromMemento(caretaker.get(1));
console.log('Second saved State:', originator.state

); // Second saved State: State3
```

### 12. State Pattern
State الگوئی است که به یک شیء اجازه می‌دهد رفتار خود را در زمانی که وضعیت داخلی‌اش تغییر می‌کند تغییر دهد.

```javascript
class Context {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  request() {
    this.state.handle();
  }
}

class ConcreteStateA {
  handle() {
    console.log('State A handling request');
  }
}

class ConcreteStateB {
  handle() {
    console.log('State B handling request');
  }
}

const context = new Context();
const stateA = new ConcreteStateA();
const stateB = new ConcreteStateB();

context.setState(stateA);
context.request(); // State A handling request

context.setState(stateB);
context.request(); // State B handling request
```

### 13. Template Method Pattern
Template Method الگوئی است که اسکلت یک الگوریتم را در یک متد پایه تعریف می‌کند، در حالی که پیاده‌سازی برخی مراحل به زیرکلاس‌ها محول می‌شود.

```javascript
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
```

### 14. Visitor Pattern
Visitor الگوئی است که به شما اجازه می‌دهد بدون تغییر کلاس‌های اشیاء جدید، عملیات جدیدی به آن‌ها اضافه کنید.

```javascript
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
```

### 15. Chain of Responsibility Pattern
Chain of Responsibility الگوئی است که به شما اجازه می‌دهد درخواست را از طریق یک زنجیره از دریافت‌کنندگان عبور دهید تا زمانی که یکی از آن‌ها درخواست را پردازش کند.

```javascript
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
```

### 16. Flyweight Pattern
Flyweight الگوئی است که به شما اجازه می‌دهد به‌صورت مؤثر از تعداد زیادی اشیاء کوچک استفاده کنید.

```javascript
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
```

### 17. Proxy Pattern
Proxy الگوئی است که به شما اجازه می‌دهد یک شیء را با یک شیء جایگزین کنید که رفتار شیء اصلی را کنترل می‌کند.

```javascript
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
```

### 18. Composite Pattern
Composite الگوئی است که به شما اجازه می‌دهد اشیاء را در ساختارهای درختی ترکیب کنید تا بتوانید با آن‌ها به عنوان اشیاء منفرد یا مجموعه‌ها کار کنید.

```javascript
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
```

### 19. Builder Pattern
Builder الگوئی است که به شما اجازه می‌دهد اشیاء پیچیده را مرحله به مرحله بسازید.

```javascript
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
```

### 20. Abstract Factory Pattern
Abstract Factory الگوئی است که یک رابط برای ایجاد خانواده‌های اشیاء مرتبط یا وابسته بدون مشخص کردن کلاس‌های دقیق آن‌ها فراهم می‌کند.

```javascript
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

class Truck

Factory {
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
```

### 21. Bridge Pattern
Bridge الگوئی است که به شما اجازه می‌دهد از هم‌زیستی رابط‌ها و پیاده‌سازی‌های آن‌ها جداگانه استفاده کنید.

```javascript
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
```

### 22. Iterator Pattern
Iterator الگوئی است که به شما اجازه می‌دهد به عناصر یک مجموعه به صورت متوالی دسترسی پیدا کنید بدون اینکه جزئیات پیاده‌سازی آن مجموعه را بدانید.

```javascript
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
```

### 23. Interpreter Pattern
Interpreter الگوئی است که برای ارزیابی یا پردازش زبان‌ها و نمایش‌ها به کار می‌رود.

```javascript
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
```

این‌ها ۲۳ الگوی طراحی متداول در JavaScript هستند. هر کدام از این الگوها برای حل یک نوع خاص از مسئله‌ها استفاده می‌شوند و فهمیدن آن‌ها به شما کمک می‌کند که برنامه‌نویسی ساختارمند و بهینه‌تری داشته باشید.
