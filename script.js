function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    var header = document.getElementById("header-container");
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.style.display = "none"; // Hide overlay
        header.style.backgroundColor = "transparent"; // Reset header background
    } else {
        sidebar.classList.add('open');
        overlay.style.display = "block"; // Show overlay
        overlay.style.zIndex = "1001"; // Increase z-index to be above the header
        sidebar.style.zIndex = "1002"; // Increase z-index to be above the overlay
    }
}

function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    var header = document.getElementById("header-container");
    sidebar.classList.remove('open');
    overlay.style.display = "none"; // Hide overlay
    overlay.style.zIndex = "999"; // Reset z-index
    sidebar.style.zIndex = "1001"; // Reset z-index
    header.style.backgroundColor = "transparent"; // Reset header background
}





window.onload= function() {scrollFunction()};
window.onscroll= function() {scrollFunction()};
function scrollFunction() {
    var container = document.getElementById("header-sidebar-container");
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        container.style.background = "rgba(255, 255, 255, 0.9)";
        container.style.padding = "10px 0"; // Adjust padding when scrolling
    } else {
        container.style.background = "none";
        container.style.padding = "20px 0"; // Reset padding when not scrolling
    }
}

