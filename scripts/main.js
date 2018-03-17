
$(document).ready(function() {
  $(".icon").on("click", function(){
    $(this).css("font-size", "15px");
      const x = document.getElementById("MainNav");
      if (x.className === "topnav") {
          x.className += " responsive";
          $(".logRegister").removeClass('float-right');
          // x.children[5].className = "";
      } else {
          x.className = "topnav";
          $(".logRegister").addClass('float-right');
          // x.children[5].className = "float-right";
      }
  });
});
