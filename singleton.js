// ### 1. Singleton Pattern
// Singleton یک الگو است که اجازه می‌دهد فقط یک نمونه از یک کلاس ایجاد شود.

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