// ### 3. Observer Pattern
// Observer الگوئی است که به یک شی اجازه می‌دهد تغییرات در شیء دیگری را مشاهده و به آن‌ها واکنش نشان دهد.


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
  