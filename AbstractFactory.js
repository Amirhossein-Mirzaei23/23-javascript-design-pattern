


// ### 20. Abstract Factory Pattern
// Abstract Factory الگوئی است که یک رابط برای ایجاد خانواده‌های اشیاء مرتبط یا وابسته بدون مشخص کردن کلاس‌های دقیق آن‌ها فراهم می‌کند.


class Car {
    info() {
      return 'Car';
    }
  }
  
  class Truck {
    info() {
      return 'Truck';
    }
  }
  
  class CarFactory {
    createVehicle() {
      return new Car();
    }
  }
  
  class Factory {
    createVehicle() {
      return new Truck();
    }
  }
  
  class VehicleFactory {
    static getFactory(type) {
      switch(type) {
        case 'car':
          return new CarFactory();
        case 'truck':
          return new TruckFactory();
        default:
          return null;
      }
    }
  }
  
  const carFactory = VehicleFactory.getFactory('car');
  const car = carFactory.createVehicle();
  console.log(car.info()); // Car
  
  const truckFactory = VehicleFactory.getFactory('truck');
  const truck = truckFactory.createVehicle();
  console.log(truck.info()); // Truck
  
  