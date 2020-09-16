// document.addEventListener("DOMContentLoaded", () => {//
//   // your code here
// });

let taskForm = document.querySelector('#create-task-form')
let taskUl = document.querySelector('#tasks')
  // console.log(taskUl)
  // console.log(taskForm)
  taskForm.addEventListener('submit', (evt) => {
    evt.preventDefault() 
    // console.log(evt.target)
    let input = evt.target[0].value 
    // input field of form passing input to showToDo function
    showToDo(input)
})

function showToDo(input){ 
//  console.log(input)
 let li = document.createElement('li')
  li.innerText = input 
  // console.log(li)
  let button = document.createElement('button')
  button.innerText = "X"
  li.append(button)
  taskUl.append(li)
  button.addEventListener('click', (evt) => {
    // console.log('Click Me')
    li.remove()
  })
}

