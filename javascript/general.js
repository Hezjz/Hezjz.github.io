const navigation = document.getElementById("nav-mobile");
navigation.style.display = "none";


function toggleNav() {
     if (navigation.style.display == "none") {
         navigation.style.display = "flex";
     } else {
         navigation.style.display = "none";
    }
}


document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hideMenu();
    }
});