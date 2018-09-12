$("body").keydown(function(e){
    let location;
    let nextLocation;
    switch (e.which) {
        case 13: // return 
            switchAutoRandomState();
            alert('RANDOM: ' + {true: 'on', false: 'off'}[AUTO_RANDOM_STATE]);
            break;
        case 32: // space
            switchAllowManualInput();
            alert('INPUT: ' + {true: 'on', false: 'off'}[ALLOW_MANUAL_INPUT]);
            break;
        case 37: // left
            location = diagram.world.location - 1;
            nextLocation = {0: null, 1: 0, 2: 3, 3: null}[location];
            if (nextLocation != null) {
                diagram.robot.style('transform', `translate(${xPosition(nextLocation)}px,${yPosition(nextLocation)-Y_SPACE}px)`);
            }
            break;
        case 38: // up
            location = diagram.world.location - 1;
            nextLocation = {0: 3, 1: 2, 2: null, 3: null}[location];
            if (nextLocation != null) {
                diagram.robot.style('transform', `translate(${xPosition(nextLocation)}px,${yPosition(nextLocation)-Y_SPACE}px)`);
            }
            break;
        case 39: // right
            location = diagram.world.location - 1;
            nextLocation = {0: 1, 1: null, 2: null, 3: 2}[location];
            if (nextLocation != null) {
                diagram.robot.style('transform', `translate(${xPosition(nextLocation)}px,${yPosition(nextLocation)-Y_SPACE}px)`);
            }
            break;
        case 40: // down
            location = diagram.world.location - 1;
            nextLocation = {0: null, 1: null, 2: 1, 3: 0}[location];
            if (nextLocation != null) {
                diagram.robot.style('transform', `translate(${xPosition(nextLocation)}px,${yPosition(nextLocation)-Y_SPACE}px)`);
            }
            break;
    }
});