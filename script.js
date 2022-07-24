// navbar toggle for md screen
myNavbar = () => {
    // console.log("jhfjh");
    var element = document.getElementById("header");
    element.classList.toggle("toggle-header");
}


// go to top
document.addEventListener('scroll', function(e) {
    let y = window.scrollY;
    let arrowTop = document.getElementById("arrow-top")
    if (y < 70) {

        arrowTop.classList.add("opacity-0");
        arrowTop.classList.remove("opacity-60");
        // console.log(y);
    } else {
        arrowTop.classList.add("opacity-60");
        arrowTop.classList.remove("opacity-0");
    }
    


});


window.addEventListener('resize', function(e) {
    console.log(window.innerWidth);
    
   
    


});



