const todoArray = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];
// checking if todos is available in local storage
console.log(todoArray);

document.querySelector("#create").addEventListener("click", () => {
  const valueInput = document.querySelector("#input");
  addNewTodo(valueInput);
});

function displayDate() {
  let date = new Date();
  date = date.toDateString();
  console.log(date);
  document.getElementById("date").innerHTML = date;
}
function displayItems() {
  let items = "";
  for (let i = 0; i < todoArray.length; i++) {
    items += `
     <div class="todo-item">
     <div class="content">
        <textarea class="textarea" disabled>${todoArray[i]}</textarea>
        <div class="buttons-group">
         <div class="delete-controller">
          <img src="./icons/delete.svg" width="20px" height="20px" onclick="deleteTodo(${i})"/>
        </div>
        <div class="done-controler">
          <img src="./icons/tick.svg" width="20px" height="20px" onclick="clearTodo(${i})" />
        </div>
        <div class="edit controller"><button class="edit-btn" onclick="enableTextArea(${i})" >Edit</button>
        <button class="done" onclick="disableTextArea(${i})">Done</button>
        </div></div>
       
      </div>
      </div>
    `;
  }
  document.querySelector(".todo-list").innerHTML = items;
}
function enableTextArea(index) {
  document.getElementsByClassName("textarea")[index].disabled = false;
  document.getElementsByClassName("done")[index].style.display = "inline";
}
function deleteTodo(index) {
  todoArray.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  location.reload();
}
function clearTodo(index) {
  window.alert("Task done");
  deleteTodo(index);
}
//This function disables the textarea for the corresponding todo item
//It also refreshes the local storage todos object by reassigning to the edited todoArray to update it
function disableTextArea(index) {
  document.getElementsByClassName("textarea")[index].disabled = true;

  todoArray[index] = document.getElementsByClassName("textarea")[index].value;
  localStorage.setItem("todos", JSON.stringify(todoArray));
  location.reload();
}
window.onload = function () {
  displayDate();
  displayItems();
};
// This function adds a new list item to the todoArray and the reassigns it to the todos object in the local storage so it gets updated
function addNewTodo(input_value) {
  todoArray.push(input_value.value);
  localStorage.setItem("todos", JSON.stringify(todoArray));
  location.reload();
}
