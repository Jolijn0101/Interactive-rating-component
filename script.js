let activeRating = false;

//select all the numbers and add eventlisteners to them
document.querySelectorAll('#rating .circle').forEach((item) => {
  item.addEventListener('click', addRating);
});

function addRating(event) {
  //check if there is already a number selected
  if (activeRating !== false) {
    document.getElementById(activeRating).classList.remove('active');
  }
  //set the new number and change background color
  activeRating = [event.target.id, event.target.innerHTML];
  document.getElementById(activeRating[0]).classList.add('active');
}

function submitRating() {
  //check if there is a number selected
  if (activeRating === false) {
    document.getElementById('warning-text').style.display = 'block';
  } else {
    //Makes the rating-start div invisible
    document.querySelector('#rating-start').style.display = 'none';
    //sets the new outcome
    document.querySelector('#outcome').innerHTML = `You selected ${activeRating[1]} out of 5`;
    //displays the rating-end div
    document.querySelector('#rating-end').style.display = 'block';
  }
}
