function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.style.display = "none"; // Hide overlay
    } else {
        sidebar.classList.add('open');
        overlay.style.display = "block"; // Show overlay
    }
}

function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    sidebar.classList.remove('open');
    overlay.style.display = "none"; // Hide overlay
}


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var container = document.getElementById("header-sidebar-container");
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        container.style.background = "rgba(255, 255, 255, 0.9)";
        container.style.padding = "10px 0"; // Adjust padding when scrolling
    } else {
        container.style.background = "none";
        container.style.padding = "20px 0"; // Reset padding when not scrolling
    }
}

