
// ### 18. Composite Pattern
// Composite الگوئی است که به شما اجازه می‌دهد اشیاء را در ساختارهای درختی ترکیب کنید تا بتوانید با آن‌ها به عنوان اشیاء منفرد یا مجموعه‌ها کار کنید.


class Component {
    add(component) {}
    remove(component) {}
    display(indent) {}
  }
  
  class Leaf extends Component {
    constructor(name) {
      super();
      this.name = name;
    }
  
    display(indent) {
      console.log(`${indent}${this.name}`);
    }
  }
  
  class Composite extends Component {
    constructor(name) {
      super();
      this.name = name;
      this.children = [];
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      this.children = this.children.filter(child => child !== component);
    }
  
    display(indent) {
      console.log(`${indent}${this.name}`);
      this.children.forEach(child => child.display(indent + '--'));
    }
  }
  
  const root = new Composite('Root');
  const leaf1 = new Leaf('Leaf 1');
  const leaf2 = new Leaf('Leaf 2');
  
  root.add(leaf1);
  root.add(leaf2);
  
  const subComposite = new Composite('SubComposite');
  subComposite.add(new Leaf('Leaf 3'));
  
  root.add(subComposite);
  
  root.display('');
  // Root
  // --Leaf 1
  // --Leaf 2
  // --SubComposite
  // ----Leaf 3
  