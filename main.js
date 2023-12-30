function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      var content = document.getElementById('content');
      if (sidebar.style.width === '200px') {
        sidebar.style.width = '0';
      } else {
        sidebar.style.width = '200px';
         }
    }