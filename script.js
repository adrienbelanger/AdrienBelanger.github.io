document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById("sidebar");
    var menuButton = document.querySelector(".menu-button");
    
    // Function to open or close the sidebar
    function toggleSidebar() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        } else {
            sidebar.classList.add('open');
        }
    }
    
    // Function to close the sidebar if clicked outside of it
    function closeSidebar(e) {
        if (!sidebar.contains(e.target) && e.target !== menuButton) {
            sidebar.classList.remove('open');
        }
    }

    // Toggle sidebar when menu button is clicked
    menuButton.addEventListener('click', toggleSidebar);

    // Close sidebar when clicking outside of it
    document.addEventListener('click', closeSidebar);
});
