/* Page Menu */

function homeMenuEnter() {
    var imageElement = document.getElementById('menuImageID');
    imageElement.src='assets/home-white-32.png';
}

function homeMenuOut() {
    var imageElement = document.getElementById('menuImageID');
    imageElement.src='assets/home-32.png'
}

function skillMenuEnter() {
    var imageElement = document.getElementById('menuSkillID');
    imageElement.src='assets/puzzle-white-32.png';
}

function skillMenuOut() {
    var imageElement = document.getElementById('menuSkillID');
    imageElement.src='assets/puzzle-32.png'
}

function workMenuEnter() {
    var imageElement = document.getElementById('menuWorkID');
    imageElement.src='assets/business-white-32.png';
}

function workMenuOut() {
    var imageElement = document.getElementById('menuWorkID');
    imageElement.src='assets/business-32.png'
}

function educationMenuEnter() {
    var imageElement = document.getElementById('menuEducationID');
    imageElement.src='assets/book-white-32.png';
}

function educationMenuOut() {
    var imageElement = document.getElementById('menuEducationID');
    imageElement.src='assets/book-32.png'
}



/* Top Button */

let goToTopButton = document.getElementById("topButton");
window.onscroll = function() {showHideTopButton()};

//Do this once at first (for refreshing the page)
backToTheTop();

function showHideTopButton() {
    if ( scrollMoreThan20Pixel() ) {
        goToTopButton.style.display = "block";
    } else {
        goToTopButton.style.display = "none";
    }
}

function scrollMoreThan20Pixel() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        return true;
    else
        return false;
}

function backToTheTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}