var images = ["http://www.pngmart.com/files/7/Bengal-Tiger-Transparent-Background.png", "https://www.pngall.com/wp-content/uploads/2016/03/Lion-PNG-Clipart.png", "https://www.seekpng.com/png/detail/10-104728_elephant-face-elephant-transparent-background.png"];

var names = ["Tiger","Lion","Elephant"];

var i = 0;
function update(){
    i++
    var number_of_wild_animals_in_array = 5
    var uptateImage = images[i];
    var updateNames = names[1];
    document.getElementById("Tiger_image").src = updatedImage;
    document.getElementById(Wild_animal_names).innerHTML = updateNames;
}