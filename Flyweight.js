
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
  