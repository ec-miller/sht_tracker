let counter = 1;
let limit = 5;
function addInput(divName){

     if (counter == limit)  {
          alert("You have reached the limit of adding " + counter + " emails");
     }
     else {
          let newdiv = document.createElement('div');
          newdiv.innerHTML = "Email " + (counter + 1) + ' <br><input type="text"  placeholder="Email" class="form-control">';
          document.getElementById(divName).appendChild(newdiv);
          counter++;
     }
}
