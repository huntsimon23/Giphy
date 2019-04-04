// 2. Define global var 'topics' w/ 10 NFL team strings
var topics = ["Dolphins", "Patriots", "Jets", "Bills", "Seahawks", "Texans", "Buccaneers", "Jaguars", "Ravens", "Packers"];

// 3. Define global var 'x' to hold #submit-button.text contents
x = "";

// 4. Define global var queryUrl with API formatted to recieve 'x' string value, return 10 .gif images
var queryUrl = "http://api.giphy.com/v1/gifs/search?api_key=xcXmdAKaKKLtv9PQ3bkHFpNK9KHa1rRa&limit=10&q=" + x;

$(document).ready(function() {
// 5. Define 'addButtons' function including a for loop to populate #teams div with buttons based on the contents of topics array
//     - topics.length iterations
function addButtons () {
for (i=0; i < topics.length; i++) {
//     - Jquery create button () command with 'topics'[i].text assigned, add class .nfl
var newButton = $("<button type='button' class='btn btn-info'>").text(topics[i]).addClass("nfl");
//     - Jquery add button to #teams div
$("#teams").append(newButton);
}};

addButtons();

});
// 6. Define 'addGifs' on click function    
//     - empty #gifs div
//     - empty global var x 
//     - redefine x as #submit-button.text
//     - define AJAX request with GET and queryURL
//     - define promise function 
//         - console.log(this) - find object properties for fixed height animated & still image links, rating, and title? 
//         - generate and append the images to #gifs div.
//         - add .giphyImages class!
//         - create if/esle statement, if .giphyImages with JQuery onclick to toggle URL still/animation 

// 6. Create JQuery for #submit-button onclick
//     - push #input-text string to 'topics' array
//     - empty #teams div
//     - run 'addButtons' function to repopulate #teams div

// 7. Create JQuery for .nfl onclick
//     - call 'addGifs' function

// 8. call 'addButtons'