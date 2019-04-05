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
    topics.push($("#input-text").val());
    console.log(topics);
    //     - empty #teams div
    $("#teams").empty();
    //     - push #input-text string to 'topics' array
    //     - run 'addButtons' function to repopulate #teams div
    addButtons();
});

// 7. Create JQuery for .nfl onclick
$(document).on("click", ".nfl", function() {
     // JQuery define var x as this.data-name
       x = $(this).attr("data-name");
    // Define var queryUrl with API formatted to recieve 'x' string value, return 10 .gif images
    var queryUrl = "http://api.giphy.com/v1/gifs/search?api_key=xcXmdAKaKKLtv9PQ3bkHFpNK9KHa1rRa&limit=5&rating=g&q=football_players_" + x; 
//     - empty #gifs div
    $("#gifs").empty();
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
    var imageStill = response.data[i].images.fixed_height_still.url;
    var gifSource = imageAnimated;
    //      generate and append the images to #gifs div, - add .giphyImages class!
    $("#gifs").append("<img src='" + gifSource + "' data-still='" + imageStill + "' data-animate='" + imageAnimated + "' data-state='animate' class=giphyImage>");
}
    // - create if/esle statement, if .giphyImages with JQuery onclick to toggle URL still/animation 
    $(document).on("click", ".giphyImage", function() {
        var state = $(this).attr("data-state");
        if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");}

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          }
          console.log(state);
        });
});
});
addButtons();
});