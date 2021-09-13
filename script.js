const container = document.querySelector('.container')
const seats = document.querySelectorAll( '.row .seat:not(.occupied)' )
// const count = document.getElementById('count')
// const total = document.getElementById('total')

// const classSelect = document.getElementById('seat-class')

// const selectElement = document.querySelector('.seat-class')

function showDiv(select) {
  
  if (select.value == "business") {
    document.getElementById("bc").style.display = "block";
    document.getElementById("regular-seats").style.display = "none";
    document.getElementById("extra-leg").style.display = "none";
  } else if (select.value == "extra") {
    document.getElementById("extra-leg").style.display = "block";
    document.getElementById("bc").style.display = "none";
    document.getElementById("regular-seats").style.display = "none";
  } else if (select.value == "regular") {
    document.getElementById("regular-seats").style.display = "block";
    document.getElementById("extra-leg").style.display = "none";
    document.getElementById("bc").style.display = "none";
  } else {
    // document.getElementById("main-container").style.display = "none";
    document.getElementById("regular-seats").style.display = "none";
    document.getElementById("extra-leg").style.display = "none";
    document.getElementById("bc").style.display = "none";
  }
}



container.addEventListener('click', e => {
 if ( 
   e.target.classList.contains('seat') && 
   !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
   }
})




