// Get the current page URL
var currentPage = window.location.href;

// Get all the links in the menu
var links = document.querySelectorAll('.menu .nav-list a');

// Remove 'active' class from all links
links.forEach(function(link) {
  link.parentNode.classList.remove('active');
});

// Iterate through the links and add the 'active' class to the matching link
links.forEach(function(link) {
  if (link.href === currentPage) {
    link.parentNode.classList.add('active');
  }
});


window.onscroll=function(){
    //variables to track the position of scrolling.
    var svalue=window.scrollY;
    var scrollPosition=window.pageYOffset;
   //variables to select document elemrnts.
   var navBar= document.getElementById("myNav");
   var donButton=document.getElementById("Donete");
   var banner=document.getElementById("banner");
   var description=document.getElementById("description");
   //scroll background image less speed as the page scrolls.
   banner.style.backgroundPosition=`center ${-scrollPosition /5 }px`;
   // decrease paragraph opacity.
   description.style.opacity=`${1-scrollPosition /300}`;

   
    if(window.pageYOffset > myNav.offsetTop){
        navBar.classList.add("sticky");
         donButton.classList.add("doanteButton");
         donButton.style.border="none";
    }
    else{
        navBar.classList.remove("sticky");
        donButton.classList.remove("doanteButton");
        donButton.style.border="#ffba00 1px solid";
    }
    
};