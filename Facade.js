
// ### 9. Facade Pattern
// Facade الگوئی است که یک رابط ساده به مجموعه‌ای از رابط‌های پیچیده فراهم می‌کند.


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
  