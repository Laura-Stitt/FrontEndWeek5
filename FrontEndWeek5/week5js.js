class Player {
    constuctor(name, position) {
        this.name = name;
        this.position = position;
    }

  describe(){
    return `${this.name} plays ${this.position}.`;
  }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }
}