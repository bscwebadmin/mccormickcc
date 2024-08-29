// (function(){
//    "use-strict";
//    var menuLinks = document.getElementById("menu__Links_id");
//    var navLogo = document.getElementById("nav-logo");
//    document.getElementById("mobile-nav").addEventListener("click", function(e){
//       menuLinks.classList.toggle("collapse");
//       navLogo.classList.toggle("d-none");
//    });
//
//    var dropArrow = document.getElementById("dropArrowBtn");
//    var subLinkContainer = document.getElementById("subLinkContainerId");
//    dropArrow.addEventListener("click", function(e){
//      subLinkContainer.classList.toggle("d-none");
//    });




// }());
//
// (function(){
//    "use-strict";
//
//    var menuLinks = document.getElementById("homeNavHamburgerContent");
//    var navLogo = document.getElementById("logo-div");
//    var navbar  = document.getElementById("navbar-toggler1");
//    navbar.addEventListener("click", function(){
//
//       menuLinks.classList.toggle("collapse");
//       navLogo.classList.toggle("d-none");
//    });
//
//    var dropArrow = document.getElementById("dropArrowBtn");
//    var subLinkContainer = document.getElementById("subLinkContainerId");
//    // dropArrow.addEventListener("click", function(e){
//    //   subLinkContainer.classList.toggle("d-none");
//    // });
//
//
//
//
// }());
(function()  {
   "use-strict";
   document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar-toggler1');
    const menuLinks = document.getElementById('homeNavHamburgerContent');
    const navLogo = document.getElementById('logo-div');

    navbar.addEventListener("click", function(){
       menuLinks.classList.toggle("collapse");
       navLogo.classList.toggle("d-none");
    });
});
}());