


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
  