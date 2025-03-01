// 23 of most useful javascript design pattern


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