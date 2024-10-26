document.addEventListener('DOMContentLoaded', function() {
    // Get project elements
    var project1 = document.getElementById('project1');
    var project2 = document.getElementById('project2');
    var project3 = document.getElementById('project3');
    var img = document.querySelector('.header-img')
    var rotationAngle = 0;

    
    project2.addEventListener('click', function() {
        showDetails('Project 2');
    });

    project3.addEventListener('click', function() {
        showDetails('Project 3');
    });

    
    img.addEventListener('click',function(){
    
        img.classList.toggle('stop-img')
        
    })
});




