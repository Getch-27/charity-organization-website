

window.onscroll=function(){
    var svalue=window.scrollY;
   var navBar= document.getElementById("myNav");
   var donButton=document.getElementById("Donete");
   var chard=document.getElementById("statstic");
    if(window.pageYOffset > myNav.offsetTop){
        navBar.classList.add("sticky");
         donButton.classList.add("doanteButton");
         chard.classList.add("ShowCard");
    }
    else{
        navBar.classList.remove("sticky");
        donButton.classList.remove("doanteButton");
    }
    
};