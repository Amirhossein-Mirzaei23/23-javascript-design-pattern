// ### 11. Memento Pattern
// Memento الگوئی است که وضعیت داخلی یک شیء را بدون افشای جزئیات داخلی آن ذخیره می‌کند.


class Memento {
    constructor(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  }

  
class Originator {
    constructor() {
      this.state = null;
    }
  
    setState(state) {
      this.state = state;
    }
  
    saveStateToMemento() {
      return new Memento(this.state);
    }
  
    getStateFromMemento(memento) {
      this.state = memento.getState();
    }
  }
  
  class Caretaker {
    constructor() {
      this.mementoList = [];
    }
  
    add(memento) {
      this.mementoList.push(memento);
    }
  
    get(index) {
      return this.mementoList[index];
    }
  }
  
  const originator = new Originator();
  const caretaker = new Caretaker();
  
  originator.setState('State1');
  originator.setState('State2');
  caretaker.add(originator.saveStateToMemento());
  
  originator.setState('State3');
  caretaker.add(originator.saveStateToMemento());
  
  originator.setState('State4');
  
  console.log('Current State:', originator.state); // Current State: State4
  originator.getStateFromMemento(caretaker.get(0));
  console.log('First saved State:', originator.state); // First saved State: State2
  originator.getStateFromMemento(caretaker.get(1));
  console.log('Second saved State:', originator.state
  
  ); // Second saved State: State3
  