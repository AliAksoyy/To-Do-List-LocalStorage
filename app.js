const addBtn = document.getElementById("todo-button")
const todoInput = document.querySelector("#todo-input")
const todoUl = document.querySelector("#todo-ul")



addBtn.addEventListener("click", function() {
    if(todoInput.value.trim() === "") {
        alert("Please enter new todo")
    }else {
        const newTodo = {
            id: new Date().getTime(),
            text: todoInput.value,
            completed: true
        };
        const {id,text,completed} =newTodo
       createListElement(newTodo)
       todoInput.value = ""
    }
})

const createListElement = (newTodo) => {
    const li = document.createElement("li")
    li.setAttribute("id", newTodo.id)

    completed ? li.classList.add("completed") : ""

    const okIcon = document.createElement("i")
    okIcon.setAttribute("class", "fas fa-check")
    li.appendChild(okIcon)

     const p = document.createElement("p");
     const pTextNode = document.createTextNode(newTodo.text);
     p.appendChild(pTextNode);
     li.appendChild(p);

    const deleteIcon = document.createElement("i")
    deleteIcon.setAttribute("class", "fas fa-trash")
    li.appendChild(deleteIcon)
    todoUl.appendChild(li)
}

todoInput.addEventListener("keypress", (e)=> {
    // console.log(e)
    if(e.which === 13) {
        addBtn.click()
    }
})

window.onload = function() {
    todoInput.focus()
}