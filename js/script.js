function myFunction() {
    var navLinks = document.getElementById("nav-links");
    var icon = document.querySelector(".fa");

    navLinks.classList.toggle("show");
    
    // Toggle between fa-bars and fa-times icons
    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
}
