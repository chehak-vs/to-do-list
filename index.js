
const divList = document.querySelector('.listHolder');
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

function createBtn(parent) {
  // Create a button to mark the task as completed
  const completeBtn = document.createElement('button');
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  completeBtn.className = 'btn-icon';
  completeBtn.addEventListener('click', () => {
    parent.classList.toggle('completed');
  });
  parent.appendChild(completeBtn);

  // Create a button to delete the task
  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  deleteBtn.className = 'btn-icon';
  deleteBtn.addEventListener('click', () => {
    parent.remove();
  });
  parent.appendChild(deleteBtn);
}


//event listner on add button
function addLists() {
  if (addInput.value === '') {
    alert('Enter the list name please!!!');
  } else {
    const ul = divList.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = addInput.value;
    addInput.value = '';
    ul.appendChild(li);
    createBtn(li);
  }
}

// add list when clicked on add item button
addBtn.addEventListener('click', () => {
  addLists();
});

// add list when pressed enter
addInput.addEventListener('keyup', (event) => {
  if(event.which === 13) {
    addLists();
  }
});