// ### 6. Prototype Pattern
// Prototype الگوئی است که اجازه می‌دهد اشیاء جدید از نمونه‌های موجود ایجاد شوند.


class Vehicle {
    constructor(type, model) {
      this.type = type;
      this.model = model;
    }
  
    clone() {
      return new Vehicle(this.type, this.model);
    }
  }
  
  const car = new Vehicle('Car', 'Tesla');
  const carClone = car.clone();
  
  console.log(carClone); // Vehicle { type: 'Car', model: 'Tesla' }
  
  