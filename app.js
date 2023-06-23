let Navlink=document.querySelectorAll('.nav-list');
for(let i=0 ;i <Navlink.length;i ++){
    Navlink[i].addEventListener('click',function(){
        for(let j = 0 ; j< Navlink.length; j++){
            Navlink[j].classList.remove('active');
        }
        this.classList.add('active');
    
    })
}
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

const rotateImage = document.querySelector('.logoImage');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset;
  const angle = scrollTop * 10;
  rotateImage.style.transform = `rotate(${angle}deg)`;
});
var faqs = document.querySelectorAll('.faq img');
let isRotated = false;

for (var i = 0; i < faqs.length; i++) {
    faqs[i].addEventListener('click', function() {
        
        // Close all other faqs
        for (var j = 0; j < faqs.length; j++) {
            if (faqs[j] !== this && faqs[j].nextElementSibling.style.display === 'block') {
                faqs[j].nextElementSibling.style.display = 'none';
                faqs[j].style.transform = "rotate(0deg)";
               }
        }
       
        // Toggle the display of the clicked faq
        this.nextElementSibling.style.display = (this.nextElementSibling.style.display == 'block') ? 'none' : 'block';
        this.style.transform = "rotate(180deg)";
        if(this.nextElementSibling.style.display == 'none'){
            this.style.transform = "rotate(0deg)";
        }
        
    });
}
