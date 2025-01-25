// ### 7. Command Pattern
// Command الگوئی است که یک عملیات را در یک شیء به عنوان یک فرمان (Command) محصور می‌کند.


class Light {
    turnOn() {
      console.log('Light is on');
    }
  
    turnOff() {
      console.log('Light is off');
    }
  }
  
  class TurnOnCommand {
    constructor(light) {
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class TurnOffCommand {
    constructor(light) {
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  
  class RemoteControl {
    setCommand(command) {
      this.command = command;
    }
  
    pressButton() {
      this.command.execute();
    }
  }
  
  const light = new Light();
  const turnOn = new TurnOnCommand(light);
  const turnOff = new TurnOffCommand(light);
  
  const remote = new RemoteControl();
  remote.setCommand(turnOn);
  remote.pressButton(); // Light is on
  
  remote.setCommand(turnOff);
  remote.pressButton(); // Light is off
  
  