let counter = 1;
let limit = 5;
function addInput(divName){
  event.preventDefault();

     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " emails");
     }
     else {
          let newdiv = document.createElement('div');
          newdiv.innerHTML = "Email " + (counter + 1) + ' <br><input type="email" autocomplete="email" placeholder="Email" class="form-control">';
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}
