const todoText = document.getElementById('todo-text');
const form = document.querySelector('form');
const todoContainer = document.querySelector("#todo-container");
const filterSlider = document.getElementById("filter-slider");
const filterDiv = document.getElementById("filter-div");
const completeBtn = document.getElementById("complete");
const incompleteBtn = document.getElementById("incomplete");
const allBtn = document.getElementById("all");
let filterValue ="";
filterSlider.addEventListener("click",()=>{
    // console.log("triggered")
    filterDiv.classList.toggle("top-[0px]")
})
updateUi();

function filterTodo(value){
    filterValue = value
    updateUi();
}

function createTodo(text,id,itsCompleted){
    const li = document.createElement("li");
    li.classList.add(
        "bg-white",
        "p-3",
        "gap-2",
        "rounded-l-lg",
        "flex",
        "justify-between",
        "text-black",
        "font-medium",
        "border",
        "self-start",
        "border-black"
      );
    const element  = `
    <span id="${id}" class="flex-1 overflow-hidden   ${itsCompleted? 'line-through':''} ">${text}</span>
    <div  class="flex gap-2 justify-center ">
    <button id="todo-update" ${itsCompleted ? "disabled":""} onclick="updateTodo(${id})"><i class="fa-regular text-blue-600 fa-pen-to-square"></i></button>
    <button id="todo-del"  onclick="deleteTodo(${id})"><i class="fa-solid text-red-600 fa-trash"></i></button>
    <button id="todo-complete" onclick="completeTodo(${id})"><i class="fa-solid text-green-500 fa-check"></i></button>
    </div>
    `
    li.innerHTML = element
    return li
}



// whenEver something changes in todoArr update the ui 
function updateUi(){
    let todoArr = JSON.parse(localStorage.getItem("todos")) || [];
    todoContainer.innerHTML = "";

    if (todoArr.length === 0) {
        todoContainer.innerHTML = `<p class="text-center text-black font-medium">No todos available.</p>`;
        return;
    }
    switch(filterValue){
        case "complete":{
            todoArr = todoArr.filter((todo)=>todo.complete)
            completeBtn.classList.add("bg-pink-600","text-white")
            
            incompleteBtn.classList.remove("bg-pink-600","text-white")
            allBtn.classList.remove("bg-pink-600","text-white")
            break;
        }
        case "uncompleted":{
            todoArr = todoArr.filter((todo)=>!todo.complete)
            incompleteBtn.classList.add("bg-pink-600","text-white")
            
            completeBtn.classList.remove("bg-pink-600","text-white")
            allBtn.classList.remove("bg-pink-600","text-white")
            break;
        }
        case "all":{
            todoArr 
            incompleteBtn.classList.remove("bg-pink-600","text-white")
            
            completeBtn.classList.remove("bg-pink-600","text-white")
            allBtn.classList.add("bg-pink-600","text-white")
            break;
        }
        default:{

        }
    }
    todoArr.map((todo)=>{
        todoContainer.append(createTodo(todo.text,todo.id,todo.complete))
    })
}

function deleteTodo(id){
    console.log("delete triggered")
    let todoArr = JSON.parse(localStorage.getItem("todos")) ||[];
    todoArr  = todoArr.filter((todo)=>todo.id !==id);
    
    //Here i got some problem when i update the todo after deleting the specific todo the todo array get reduced and the id assign to todo get's obsolete and based on that i have to change the data structure to store the todo so i change it from array to array of objects
    // let newTextArr = JSON.parse(textArr).filter((todo,index)=>{

    // })
    if (todoArr.length === 0) {
        localStorage.removeItem("todos"); // Clear localStorage if no todos remain
    } else {
        localStorage.setItem("todos", JSON.stringify(todoArr));
    }
    updateUi();
}



function updateTodo(id){
    
    const element = document.getElementById(id);
    const button = element.nextElementSibling.children[0]
    const todoArr = JSON.parse(localStorage.getItem("todos")) ||[];
    let text = element.innerText
    todo = todoArr.find(item=>item.id===id);
    button.onclick = null
    // console.log(button)
    if(element.children[0] !== undefined || todo.complete ||!todo){
        return
    }
    // console.log("triggered");
        element.innerHTML = `<textarea name="" class="w-full border border-black p-[2px] h-full" id="">${element.innerText}</textarea>`
        button.innerHTML = `<span class="bg-blue-600 text-white p-[3px] animate-pulse text-xs rounded-sm" >Ok</span>`
    const textArea = document.querySelector(`textarea`)
    button.addEventListener("click",()=>{
        // console.log("triggered")
        todo.text = textArea.value;
        localStorage.setItem("todos",JSON.stringify(todoArr))
        // console.log(button)
        if(textArea.value =="" ){
            console.log(text)
            element.textContent = text
        }else{
            element.textContent = textArea.value;
        }
        button.innerHTML = `<i class="fa-regular text-blue-600 fa-pen-to-square"></i>`
        button.onclick = ()=>updateTodo(id);
        updateUi()
    })
}

function completeTodo(id){
    let todoArr = JSON.parse(localStorage.getItem("todos"));
    todoArr  = todoArr.map((todo)=>{
        if(todo.id ===id && !todo.complete){
            todo.complete = true;
        }
        // the below else statement causing the bug that when we click on completed button then it mark it as complete but when we click again on click button it un-mark all the todos which is not what we desired 
        // else{
        //     todo.complete = false;
        // }
        else if(todo.id ===id && todo.complete){ //this line fixes the bug
            todo.complete = false;
        }
        return todo
    });
    localStorage.setItem("todos",JSON.stringify(todoArr))
    updateUi();
}



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(todoText.value ===""){
        return
    }

    let todoArr = JSON.parse(localStorage.getItem("todos")) ?? [];
    
    if(todoArr.length ===0){
        localStorage.setItem("todos",JSON.stringify(todoArr))
    }

    todoArr = [...todoArr,{
        id:todoArr[todoArr.length-1]?.id  ? todoArr[todoArr.length-1].id +1:1,
        text:todoText.value,
        complete:false
    }]

    
    localStorage.setItem("todos",JSON.stringify(todoArr));
    todoText.value= ""
    updateUi();
})


