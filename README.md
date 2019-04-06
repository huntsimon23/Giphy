
My initial Psueudocode:

Html...
1. Create HTML with the following:
    - Creative Header with NFL Theme!
    - CONTAINER
    -   ROW/COL for buttons from string array of NFL #teams (10)
    -   ROW
            COL8 to hold #gifs
            COL4 bootstrap form for: #input-text field, "Add a team" label, & #submit-button

Javascript...
2. Define global var 'topics' w/ 10 NFL team strings
3. Define global var queryUrl with API formatted to recieve 'x' string value, return 10 .gif images
4. Define global var 'x' to hold #submit-button.text contents

5. Define 'addButtons' function including a for loop to populate #teams div with buttons based on the contents of topics array
    - topics.length iterations
    - Jquery create button () command with 'topics'[i].text assigned, add class .nfl
    - Jquery add button to #teams div

6. Define 'addGifs' on click function    
    - empty #gifs div
    - empty global var x 
    - redefine x as #submit-button.text
    - define AJAX request with GET and queryURL
    - define promise function 
        - console.log(this) - find object properties for fixed height animated & still image links, rating, and title? 
        - generate and append the images to #gifs div.
        - add .giphyImages class!
        - create if/esle statement, if .giphyImages with JQuery onclick to toggle URL still/animation 

7. Create JQuery for #submit-button onclick
    - push #input-text string to 'topics' array
    - empty #teams div
    - run 'addButtons' function to repopulate #teams div

8. Create JQuery for .nfl onclick
    - call 'addGifs' function

9. call 'addButtons'