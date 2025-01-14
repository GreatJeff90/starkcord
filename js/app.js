document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove("active"));

      // Add active class to the clicked button
      button.classList.add("active");

      // Get the corresponding tab ID from the button's data-tab
      const targetTab = button.getAttribute("data-tab");

      // Hide all tab contents
      tabContents.forEach(content => content.classList.add("d-none"));

      // Show the corresponding tab content
      document.getElementById(`${targetTab}-tab`).classList.remove("d-none");
    });
  });
});


// sidebar toggle
 function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('show');
    }


// Initialize Tooltips
  document.addEventListener('DOMContentLoaded', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });