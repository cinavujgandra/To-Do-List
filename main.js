const inpText = document.querySelector('#inp_text');
const btn = document.querySelector('#btn');
const createList = document.querySelector('.create_list');


btn.addEventListener("click", createToDo);
// Create list item
function createToDo(event) {
    event.preventDefault()
    if (inpText.value !== "") {
        createList.innerHTML += `<li class="item">${inpText.value}<span class="close">X</span></li>`;
        inpText.value = ""

// Delete list item
        const closeBtn = document.querySelectorAll(".close");

        for (i = 0; i < closeBtn.length; i++) {
            closeBtn[i].onclick = function () {
                const todoList = this.parentElement;
                todoList.style.display = "none";
            }
        }
    } else {
        alert("This field is required and cannot be empty")
    }

}


// Checked list item
createList.addEventListener('click', function (ev) {
    ev.target.classList.toggle('checked');

});
