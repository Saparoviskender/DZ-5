const input = document.querySelector('input')
const createbutton = document.querySelector('#create_button')
const todolist = document.querySelector('#todo_list')

const createTodo = () => {
   if (input.value.trim()  === '') {
      input.value
      return false}
   else{

   const div = document.createElement('div')
   const text = document.createElement('h3')
   const buttonsdiv = document.createElement('div')
   const edit = document.createElement('button')
   const dele = document.createElement('button')
        

   div.setAttribute('class', 'block_text')
   buttonsdiv.setAttribute('class', 'buttons_div')
   edit.setAttribute('class', 'edit_button')
   dele.setAttribute('class', 'dele_button')

   edit.innerHTML = 'EDIT'
   dele.innerHTML = 'DELETE'

   text.innerHTML = input.value
   

   buttonsdiv.append(edit,dele)
   div.append(text, buttonsdiv)
   todolist.append(div)
   
    dele.onclick = () => div.remove()
    edit.onclick = () => {
      const edittext = prompt(` меняйте: ${text.innerText}`)
      text.innerText = edittext
    }
 }
 input.value = ''
}
createbutton.addEventListener('click',  createTodo )
