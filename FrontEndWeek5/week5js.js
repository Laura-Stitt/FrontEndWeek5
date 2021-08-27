class Employee {
    constuctor(name, position) {
        this.name = name;
        this.position = position;
    }

  describe(){
    return `${this.name} does ${this.position}.`;
  }
}

class Department {
    constructor(name) {
        this.name = name;
        this.colleagues = [];
    }
}