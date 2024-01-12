let sidebar = document.getElementById('sidebar');


sidebar.style.display ='block'
function abrirMenu() {
      
    if (sidebar.style.width == '150px') {
    } else {
      sidebar.style.width ='150px';
      
    }
   }
   
function cerrarMenu() {
   
  if (sidebar.style.width === '150px') {
        sidebar.style.width = '0';
        
        
    } else {
      sidebar.style.width ='150px;'
    }
   }
