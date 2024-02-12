document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(function(dropdown) {
      var dropdownContent = dropdown.querySelector('.dropdown-content');
      var dropdownLink = dropdown.querySelector('.dropdown-link');
  
      dropdownLink.addEventListener('click', function() {
        if (dropdownContent.style.display === 'block') {
          dropdownContent.style.display = 'none';
        } else {
          dropdownContent.style.display = 'block';
        }
      });
  
      // Close the dropdown when clicking outside of it
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdownContent.style.display = 'none';
        }
      });
    });
  });
  