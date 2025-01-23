
// ### 2. Factory Pattern
// Factory یک الگو است که به تولید اشیاء بدون مشخص کردن کلاس دقیق آن‌ها کمک می‌کند.


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