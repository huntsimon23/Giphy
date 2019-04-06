var topics = ["Dolphins", "Patriots", "Jets", "Bills", "Seahawks", "Texans", "Buccaneers", "Jaguars", "Ravens", "Packers"];

$(document).ready(function() {

function addButtons () {
$("#teams").empty();

for (i=0; i < topics.length; i++) {
var newButton = $("<button type='button' class='btn btn-light'>").text(topics[i]).addClass("nfl").attr("data-name", topics[i]);
$("#teams").append(newButton);
}};

$(document).on("click", "#submit-button", function() {
    event.preventDefault();
    topics.push($("#input-text").val().trim());
    var audio = new Audio("./assets/sounds/nflsoundeffect2.m4a");
    audio.play();
    $("#teams").empty();
    addButtons();
});

$(document).on("click", ".nfl", function() {
    var x = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=xcXmdAKaKKLtv9PQ3bkHFpNK9KHa1rRa&limit=10&rating=g&q=nfl_team_" + x; 

    $("#gifs").empty();

    var audio = new Audio("./assets/sounds/nflsoundeffect.m4a");
    audio.play();

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
    console.log(response)
    
    var newGifs = response.data;

    for (i=0; i < newGifs.length; i++) {   
    var imageAnimated = newGifs[i].images.fixed_height.url;
    var imageStill = newGifs[i].images.fixed_height_still.url;
    var gifSource = imageStill;
    var gif = $("<img src='" + gifSource + "' data-still='" + imageStill + "' data-animate='" + imageAnimated + "' data-state='still' class='giphyImage'>");
    var rating = $("<p>").text("Rating: " + newGifs[i].rating).addClass("whitetext rating");
    var title = $("<p>").text("Title: " + newGifs[i].title).addClass("whitetext rating");
    
    $("#gifs").append(gif, rating, title);
    }
    });
});
    $(document).on("click", ".giphyImage", function() {
        event.preventDefault();

        var state = $(this).attr("data-state");
     
        if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
        }
    });
addButtons();
});


