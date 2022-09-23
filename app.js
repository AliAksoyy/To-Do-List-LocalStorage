const addBtn = document.querySelector("#todo-button")
const todoInput = document.querySelector("#todo-input")
const todoUl = document.querySelector("#todo-ul")


let todos =JSON.parse(localStorage.getItem("todos")) || [];



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
        console.log(todos)
        todoInput.value = "";


        
        todoUl.addEventListener("click",(e)=> {

        if(e.target.classList.contains("fa-check")) {
            e.target.parentElement.classList.toggle("checked")
        }
        })

        todoUl.onclick = (e)=> {
            if(e.target.classList.contains("fa-trash")) {
                e.target.parentElement.remove()
            }
        }

          }
    })

 function createListElement(newTodo) {
        const li = document.createElement("li")
        li.setAttribute("id", newTodo.id)
        console.log(li)
        const okIcon = document.createElement("i")
        okIcon.className = "fas fa-check"
        const texter = document.createElement("p")
        const content = document.createTextNode(newTodo.text)
        texter.appendChild(content)
        const deleteIcon = document.createElement("i")
        deleteIcon.className = "fa-solid fa-trash"
        li.appendChild(okIcon)
        li.appendChild(texter)
        li.appendChild(deleteIcon)
        todoUl.appendChild(li)

        }

        todoInput.onkeyup = (e)=> {
            if(e.which ==13) {
                addBtn.click()
            }
        }
        window.onload = ()=> {
            todoInput.focus()
        }
  
  
        