function saveData() {
  alert('Se han guardado los datos');
};

const inputName = document.querySelector(".name");

function changeColorFocus() {
  inputName.style.backgroundColor = '#fff666';
};

function changeColorNoFocus() {
  inputName.style.backgroundColor = '#9999FF';
};

const inputRandom = document.querySelector('.random');

function checkLetter(event){
  const currentLetter = event.which;
  if (currentLetter === 97 || currentLetter === 101 || currentLetter === 111 || currentLetter === 117) {
    inputRandom.style.color = '#a8323e';
  } else {
    inputRandom.style.color = '#32a836';
  }
};
