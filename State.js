
// ### 12. State Pattern
// State الگوئی است که به یک شیء اجازه می‌دهد رفتار خود را در زمانی که وضعیت داخلی‌اش تغییر می‌کند تغییر دهد.


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
  
  