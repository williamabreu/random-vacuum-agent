// In this simple problem the world includes both the environment and the robot
// but in most problems the environment and world would be separate
class World {
    constructor(numFloors) {
        this.location = 0;
        this.floors = [];
        for (let i = 0; i < numFloors; i++) {
            this.floors.push({dirty: false, wet: false});
        }
    }

    markFloorDirty(floorNumber) {
        if (!this.floors[floorNumber].wet) {
            this.floors[floorNumber].dirty = true;
            return true;
        }
        else {
            return false;
        }
    }

    markFloorWet(floorNumber) {
        if (!this.floors[floorNumber].dirty) {
            this.floors[floorNumber].wet = true;
            return true;
        }
        else {
            return false;
        }
    }

    simulate(action) {
        switch(action) {
            case 'SUCK':
                this.floors[this.location].dirty = false;
                break;
            case 'DRY':
                this.floors[this.location].wet = false;
                break;
            case 'LEFT':
                this.location = 3;
                break;
            case 'RIGHT':
                this.location = 1;
                break;
            case 'UP':
                this.location = 2;
                break;
            case 'DOWN':
                this.location = 0;
                break;
        }
        return action;
    }
}


// Rules are defined in code
function reflexVacuumAgent(world) {
    if (world.floors[world.location].dirty) { 
        return 'SUCK'; 
    }
    else if (world.floors[world.location].wet) {
        return 'DRY'; 
    }
    else {
        switch (world.location) {
            case 0:
                return 'RIGHT';
            case 1:
                return 'UP';
            case 2:
                return 'LEFT';
            case 3:
                return 'DOWN';
        }         
    }
}

// Rules are defined in data, in a table indexed by [location][dirty]
// function tableVacuumAgent(world, table) {
//     let location = world.location;
//     let dirty = world.floors[location].dirty ? 1 : 0;
//     return table[location][dirty];
// }
