var random_result;
var lost;
var win;

for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12);
    console.log(random);
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random: random
        });

    $(".crystals").append(crystal);
}





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