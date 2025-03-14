

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
  