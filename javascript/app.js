// 2. Define global var 'topics' w/ 10 NFL team strings
var topics = ["Dolphins", "Patriots", "Jets", "Bills", "Seahawks", "Texans", "Buccaneers", "Jaguars", "Ravens", "Packers"];

$(document).ready(function() {
// 5. Define 'addButtons' function including a for loop to populate #teams div with buttons based on the contents of topics array
//     - topics.length iterations
function addButtons () {
// $("#teams").empty();
for (i=0; i < topics.length; i++) {
//     - Jquery create button () command with 'topics'[i].text assigned, add class .nfl
var newButton = $("<button type='button' class='btn btn-light'>").text(topics[i]).addClass("nfl").attr("data-name", topics[i]);
//     - Jquery add button to #teams div
$("#teams").append(newButton);
}};

// 6. Create JQuery for #submit-button onclick
$(document).on("click", "#submit-button", function () {
    // stop page from refreshing
    event.preventDefault();
    topics.push($("#input-text").val().trim());
    var audio = new Audio("./assets/sounds/nflsoundeffect2.m4a");
    audio.play();
    //     - empty #teams div
    $("#teams").empty();
    $("#input-text").empty();
    //     - push #input-text string to 'topics' array
    //     - run 'addButtons' function to repopulate #teams div
    addButtons();
});

// 7. Create JQuery for .nfl onclick
$(document).on("click", ".nfl", function() {
     // JQuery define var x as this.data-name
       x = $(this).attr("data-name");
    // Define var queryUrl with API formatted to recieve 'x' string value, return 10 .gif images
    var queryUrl = "http://api.giphy.com/v1/gifs/search?api_key=kkHL4hKurs2O3eFNvauukDeCT7e0oxv8&limit=5&rating=g&q=nfl_team_" + x; 
//     - empty #gifs div
    $("#gifs").empty();
    var audio = new Audio("./assets/sounds/nflsoundeffect.m4a");
    audio.play();
//     - define AJAX request with GET and queryURL
    $.ajax({
        url: queryUrl,
        method: "GET"
        //     - define promise function 
    }).then(function(response) {
    //         - console.log(response) - find object properties for fixed height animated & still image links, rating, and title?
    console.log(response)
    // Define var newGifs to hold response objects
    var newGifs = response.data;
    //         For loop at response: 
    for (i=0; i < newGifs.length; i++) {   
    // Define vars gifSouce, imageStill, and imageAnimated to represent image URLs that will toggle
    var imageAnimated = newGifs[i].images.fixed_height.url;
    var imageStill = newGifs[i].images.fixed_height_still.url;
    var gifSource = imageAnimated;
    //      generate and append the images to #gifs div, - add .giphyImages class!
    var gif = $("<img src='" + gifSource + "' data-still='" + imageStill + "' data-animate='" + imageAnimated + "' data-state='animate' class='giphyImage' id='g" + i + "'>");
    $("#gifs").append(gif);
    var rating = $("<span>").text("Rating: " + newGifs[i].rating).addClass("whitetext rating");
    $("#gifs").append(rating);
    }
    // - create if/esle statement, if .giphyImages with JQuery onclick to toggle URL still/animation 
    $(document).on("click", ".giphyImage", function() {
        event.preventDefault();
        var state = $(this).attr("data-state");
        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        } else {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          }
          console.log(state);
        });
});
});
addButtons();
});