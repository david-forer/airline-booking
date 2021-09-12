const container = document.querySelector('.container')
const seats = document.querySelectorAll( '.row .seat:not(.occupied)' )
const count = document.getElementById('count')
const total = document.getElementById('total')

const classSelect = document.getElementById('seat-class')


// classSelect.onchange = function () {
//   const sc = document.getElementsByClassName('container')
//   const bc = document.getElementById('business-class');
//   const elr = document.getElementById('extra-leg');
//   const reg = document.getElementById('regular-seats');

//   if (classSelect === "seat-class") {
//     console.log('seat class')
//     // sc.style.display = "none"
//   }

// } 

function showHide(value) {
  const bc = document.getElementById('business-class');

  if (value=='') {
      document.getElementById('divShow').style.display = 'block';
  } {
  document.getElementById('divShow').style.display = 'block';
  }
      
}

container.addEventListener('click', e => {
 if ( 
   e.target.classList.contains('seat') && 
   !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected')
   }
})



// const bc = document.getElementById('business-class')
// if (bc.style.display !== "none") {
//   bc.style.display = "none";
// } else {
//   bc.style.display = "block";
// }

// else if (value=='business') {
//   document.getElementById('business-class').style.display = 'block';
// } else if (value=='extra') {
//   document.getElementById('extra-leg').style.display = 'block';
// } else (value=='regular') 
//   document.getElementById('regular-seats').style.display = 'block';
