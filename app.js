
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
    }
    else{
        navBar.classList.remove("sticky");
        donButton.classList.remove("doanteButton");
    }
    
};

const rotateImage = document.querySelector('.logoImage');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const angle = scrollTop * 10;
  rotateImage.style.transform = `rotate(${angle}deg)`;
});
