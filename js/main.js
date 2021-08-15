/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
let myDropdown = document.getElementById("myDropdown");
let btn = document.getElementById("btn-burger");

btn.onclick = function(){
    myDropdown.classList.toggle("show");
}


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btn-burger')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
