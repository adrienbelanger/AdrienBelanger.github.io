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
