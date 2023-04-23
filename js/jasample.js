const buttonEL = document.querySelector('button');
const inputEL = document.querySelector('input');
const listEL = document.querySelector('ul');

function addGoal() {
    const enteredValue = inputEL.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEL.appendChild(listItemEl);
    inputEL.value = '';
}

buttonEL.addEventListener('click', addGoal);



