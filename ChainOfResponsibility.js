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
  
  