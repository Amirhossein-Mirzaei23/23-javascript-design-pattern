

// ### 22. Iterator Pattern
// Iterator الگوئی است که به شما اجازه می‌دهد به عناصر یک مجموعه به صورت متوالی دسترسی پیدا کنید بدون اینکه جزئیات پیاده‌سازی آن مجموعه را بدانید.


class Iterator {
    constructor(collection) {
      this.collection = collection;
      this.index = 0;
    }
  
    next() {
      return this.collection[this.index++];
    }
  
    hasNext() {
      return this.index < this.collection.length;
    }
  }
  
  const collection = [1, 2, 3, 4, 5];
  const iterator = new Iterator(collection);
  
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  // 1
  // 2
  // 3
  // 4
  // 5