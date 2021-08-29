alert('Welcome to the directory of teams! Here you will be able to search, add, and delete teams from our directory. Have fun!');

class Player {
    constuctor(name, position) {
        this.name = name;
        this.position = position;
    }

  describe(){
    return `${this.name} does ${this.position}.`;
  }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add a Player that is also an Employee. This person is not an employee: ${player}`);
        }
    }
    describe() {
        return `${this.name} has ${this.players.length} employees.`;
    }
}

class Menu {
    constructor() {
        this.teams = []
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        
        while (selection != 0) {
            switch (selection) {
                case `1`:
                    this.createTeam();
                    break;
                case `2`:
                    this.viewTeam();
                    break;
                case `3`:
                    this.deleteTeam();
                    break;
                case `4`:
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            try {
                selction = this.showMainMenuOptions(); //I keep getting an error on this line, but I can't fiugre out how it is different than what is in the video.
            } catch(err) {
                console.log(err);
            }
            }
        alert(`You have exited the menu. Have a Great Day!`)
    }
    showMainMenuOptions() {
        return prompt(`
        Option 0: Exit Menu
        Option 1: Add New Team
        Option 2: View Team
        Option 3: Delete a Team
        Option 4: Display all Teams
        `);
    }

    showTeamMenuOptions(teamInfo) {
        return prompt(`
        Option 0: Go Back
        Option 1: Create Player
        Option 2: Delete Player
        
        ${teamInfo}`);
    }
    
    displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ': ' + this.teams[i].name + '\n';
        }
        alert(teamString);
    }

    createTeam() {
        let name = prompt('Enter name for new Team:');
        this.teams.push(new Team(name));
    }

    viewTeam() {
        let index = prompt(`Enter the index of the Team you wish to view:`);
        if (index > -1 && index < this.teams.length) {
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';
            
            for(let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ': ' + this.selectedTeam.players[i].name + ' - '
                  + this.selectedTeam.players[i].position + '\n';
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
        }
    }
}
let menu = new Menu();
menu.start()
