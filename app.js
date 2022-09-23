const addBtn = document.querySelector("#todo-button")
const todoInput = document.querySelector("#todo-input")
const todoUl = document.querySelector("#todo-ul")


let todos =JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos)
renderSave()

function renderSave() {
    todos.forEach((item)=> {
        createListElement(item)
    })
}





addBtn.addEventListener("click", ()=> {

    if(!todoInput.value) {
        alert("Something write pleas")
    }else {
        let newTodo = {

            id: new Date().getTime(),
            text: todoInput.value,
            completed: false
        };
        createListElement(newTodo)
        todos.push(newTodo)
        localStorage.setItem("todos", JSON.stringify(todos))
        console.log(todos);

        todoInput.value = "";

       
          }
    })

 function createListElement(newTodo) {
        const { id, text, completed } = newTodo;

        const li = document.createElement("li")
        li.setAttribute("id",id)
      
        // newTodo.completed ? li.classList.add("completed") : ""
        completed && li.classList.add("checked")

        const okIcon = document.createElement("i")
        okIcon.className = "fas fa-check"
        const texter = document.createElement("p")
        const content = document.createTextNode(text)
        texter.appendChild(content)
        const deleteIcon = document.createElement("i")
        deleteIcon.className = "fa-solid fa-trash"
        li.appendChild(okIcon)
        li.appendChild(texter)
        li.appendChild(deleteIcon)
        todoUl.appendChild(li)
        console.log(li)
        localStorage.setItem("todos", JSON.stringify(todos))
        }

        todoInput.onkeyup = (e)=> {
            if(e.which ==13) {
                addBtn.click()
            }
        }
        window.onload = ()=> {
            todoInput.focus()
        }

        todoUl.addEventListener("click", (e) => {

            if(e.target.classList.contains("fa-trash")) {
                e.target.parentElement.remove()

                todos = todos.filter((a) => {
                  todos.id != a.id
                  console.log(todos);
                  localStorage.setItem("todos", JSON.stringify(todos));
                });
            }

            if(e.target.classList.contains("fa-check")) {
                e.target.parentElement.classList.toggle("checked")
                
            }
           
        })

            
                

            
         
  
  
        