sdocument.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hideMenu();
    }
});


function togglenav() {
    const navigation = document.getElementById("nav-mobile")
     if (navigation.style.display == "none") {
         navigation.style.display = "flex";
     } else {
         navigation.style.display = "none";
    }
}