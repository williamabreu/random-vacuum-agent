$("body").keydown(function(e){
    // alert(e.which);
    switch (e.which) {
        case 13: // return
            switchAuto();
            break;
        case 32: // space
            switchAuto();
            break;
        case 37: // left
            break;
        case 38: // up
            break;
        case 39: // right
            break;
        case 40: // down
            break;
    }
});