(function(){
   "use-strict";
   var menuLinks = document.getElementById("menu__Links_id");
   var navLogo = document.getElementById("nav-logo");
   document.getElementById("mobile-nav").addEventListener("click", function(e){
      menuLinks.classList.toggle("collapse");
      navLogo.classList.toggle("d-none");
   });

   var dropArrow = document.getElementById("dropArrowBtn");
   var subLinkContainer = document.getElementById("subLinkContainerId");
   dropArrow.addEventListener("click", function(e){
     subLinkContainer.classList.toggle("d-none");
   });

   


}());