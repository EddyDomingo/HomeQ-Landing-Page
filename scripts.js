// JavaScript to handle modal functionality
document.addEventListener('DOMContentLoaded', function () {
    // Get the modal
    var modal = document.getElementById('registerModal');

    // Get the buttons that open the modal
    var registerBtns = document.querySelectorAll('.register-btn');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close-btn')[0];

    // When the user clicks any register button, open the modal
    registerBtns.forEach(function (btn) {
        btn.onclick = function () {
            modal.style.display = 'block';
        }
    });

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});

function openMicrosoftForm() {
    // Replace 'YOUR_MICROSOFT_FORM_URL' with the URL of your Microsoft Form
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAZAAJpIEK9UMTVBM1NJUFVOT1RERkVETUJGSDlWNUhQNy4u', '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    var hamburgerMenu = document.getElementById("hamburger-menu");
    var sideMenu = document.getElementById("side-menu");
    var closeBtn = document.getElementById("close-btn");

    // Open side menu when clicking hamburger menu icon
    hamburgerMenu.addEventListener("click", function() {
        sideMenu.style.width = "250px"; // Adjust width as needed
    });

    // Close side menu when clicking close button
    closeBtn.addEventListener("click", function() {
        sideMenu.style.width = "0";
    });

    // Close side menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target == sideMenu) {
            sideMenu.style.width = "0";
        }
    });
});