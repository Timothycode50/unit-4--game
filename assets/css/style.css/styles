var crystalValues = {};
crystalValues[1] = Math.floor(Math.random()*12+1);
crystalValues[2] = Math.floor(Math.random()*12+1);
crystalValues[3] = Math.floor(Math.random()*12+1);
crystalValues[4] = Math.floor(Math.random()*12+1);

//.... more code here


function getCrystalHandler(crystalKey) {
   return function() {
    userTotal = userTotal + crystalValues[crystalKey];
    console.log("New userTotal " + userTotal);
    $("#score").text(userTotal);

    if (userTotal === random) {
        winner()
    }

    else if (userTotal > random) {
        loser()
    } 
}
}

$("#image1").on("click", getCrystalHandler(1));
$("#image2").on("click", getCrystalHandler(2));
$("#image3").on("click", getCrystalHandler(3));
$("#image4").on("click", getCrystalHandler(4));