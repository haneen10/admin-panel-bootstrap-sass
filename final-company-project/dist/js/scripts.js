/*!
    * Start Bootstrap - SB Admin v7.0.4 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2021 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
 
    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

/* table */


    // table
    console.log('ho');

    const items1 = [
      { date: "10/17/2018", name: "john doe", ff: "2342" },
      {  date: "10/18/2018", name: "sajad alaa ", ff: "2342" },
    ];
   
    function loadTableData(items) {
      const table = document.getElementById("testBody");
      
      items.forEach( item => {
       
        let row = table.insertRow();
        let date = row.insertCell(0);
        date.innerHTML = item.date;
        let name = row.insertCell(1);
        name.innerHTML = item.name;
        
            let ff = row.insertCell(2);
        ff.innerHTML = item.ff;
      });
    }
    loadTableData(items1);
    loadTableData([]);


