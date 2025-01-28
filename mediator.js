
// ### 10. Mediator Pattern
// Mediator الگوئی است که به اشیاء اجازه می‌دهد بدون آگاهی مستقیم از یکدیگر با هم ارتباط برقرار کنند.


class ChatRoom {
    showMessage(user, message) {
      const time = new Date().toLocaleTimeString();
      const sender = user.getName();
  
      console.log(`[${time}] ${sender}: ${message}`);
    }
  }
  
  class User {
    constructor(name, chatRoom) {
      this.name = name;
      this.chatRoom = chatRoom;
    }
  
    getName() {
      return this.name;
    }
  
    send(message) {
      this.chatRoom.showMessage(this, message);
    }
  }
  
  const chatRoom = new ChatRoom();
  
  const john = new User('John', chatRoom);
  const jane = new User('Jane', chatRoom);
  
  john.send('Hello Jane!'); 
  jane.send('Hi John!');
  // [10:00:00 AM] John: Hello Jane!
  // [10:00:01 AM] Jane: Hi John!
  