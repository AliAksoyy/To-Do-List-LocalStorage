const addBtn = document.querySelector("#todo-button")
const todoInput = document.querySelector("#todo-input")
const todoUl = document.querySelector("#todo-ul")


let todos =JSON.parse(localStorage.getItem("todos")) || [];


// document.querySelector("#todo-ul").innerText = todos


addBtn.addEventListener("click", ()=> {

    if(!todoInput.value) {
        alert("Something write pleas")
    }else {
        let newTodo = {

            id: new Date().getTime(),
            text: todoInput.value,
            completed: false
        };

        let {id,text,completed} = newTodo
        todos.push(newTodo)
        localStorage.setItem("todos", JSON.stringify(todos))

        const li = document.createElement("li")
        // console.log(li)
        li.className = "li"
        const okIcon = document.createElement("i")
        okIcon.innerHTML = `<i class="fa-solid fa-check"></i>`
        // okIcon.classList.add("fa-check")
        const texter = document.createElement("p")
        const content = document.createTextNode(`${todoInput.value}`)
        texter.appendChild(content)
        const deleteIcon = document.createElement("i")
        deleteIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`
        // deleteIcon.classList.add("fa-trash")
        li.appendChild(okIcon)
        li.appendChild(texter)
        li.appendChild(deleteIcon)
        todoUl.appendChild(li)

        todoInput.value = ""

          okIcon.addEventListener("click", (e) => {
            // e.target.parentElement.classList.toggle("checked")
           e.target.parentElement.parentElement.classList.toggle("checked")

            

          });

          deleteIcon.onclick = (e)=> {
          const ide = e.target.parentElement.parentElement.remove()
           
           id = todos.filter((item)=> {
                item.id != ide
           })

           localStorage.setItem("todos", JSON.stringify(todos))

            
          }




    }

  


})
























// *-------------------------------previous----------------------------
// const addBtn = document.getElementById("todo-button")
// const todoInput = document.querySelector("#todo-input")
// const todoUl = document.querySelector("#todo-ul")

// let todos =JSON.parse(localStorage.getItem("TODOS")) || []

//     function renderSavedTodos () {
//         todos.forEach((todo) => {
//             createListElement(todo)
//         })
//     }
//     renderSavedTodos()



// addBtn.addEventListener("click", function() {
//     if(todoInput.value.trim() === "") {
//         alert("Please enter new todo")
//     }else {
//         const newTodo = {
//             id: new Date().getTime(),
//             text: todoInput.value,
//             completed: false
//         };
//        createListElement(newTodo)
//        todos.push(newTodo)
//        localStorage.setItem("TODOS",JSON.stringify(todos))
//        todoInput.value = ""
//     }
// })

// function createListElement (newTodo)  {
//     const {id,text,completed} =newTodo
//     const li = document.createElement("li")
//     li.setAttribute("id", id)

//     // completed ? li.classList.add("completed") : ""
//     completed && li.classList.add("completed")

//     const okIcon = document.createElement("i")
//     okIcon.setAttribute("class", "fas fa-check")
//     li.appendChild(okIcon)

//      const p = document.createElement("p");
//      const pTextNode = document.createTextNode(text);
//      p.appendChild(pTextNode);
//      li.appendChild(p);

//     const deleteIcon = document.createElement("i")
//     deleteIcon.setAttribute("class", "fas fa-trash")
//     li.appendChild(deleteIcon)
//     todoUl.appendChild(li)
// }

// todoUl.addEventListener("click", (e)=> {
//    const id = e.target.parentElement.getAttribute("id")
//     if(e.target.classList.contains("fa-trash")) {
//         e.target.parentNode.remove()

//         todos = todos.filter((todo)=> todo.id !== Number(id))
//         localStorage.setItem("TODOS", JSON.stringify(todos))
//     }
//     if(e.target.classList.contains("fa-check")) {
//         e.target.parentElement.classList.toggle("checked")

//     }
// })

// todoInput.addEventListener("keypress", (e)=> {
//     // console.log(e)
//     if(e.which === 13) {
//         addBtn.click()
//     }
// })

// window.onload = function() {
//     todoInput.focus()
// }

