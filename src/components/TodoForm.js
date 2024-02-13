import React, {useState} from 'react'

export const TodoForm = () => {
  /* `const [value, setValue] = useState("")` is using the `useState` hook in React to create a state
  variable called `value` and a function called `setValue` to update the value. The initial value of
  `value` is set to an empty string `""`. */
  const [value, setValue] = useState("")
  return (
    <form className='TodoForm'>
      <input type='text' className='todo-input' placeholder='Task' /* `onChange={(e) =>
      console.log(e.target.value)}/>`
      is an event handler that is
      triggered when the value of the
      input field changes. It logs the
      current value of the input field
      to the console. */
      onChange={(e) => console.log(e.target.value)}/>
      <button type="submit" className='todo-button'> + Add Task</button>
    </form>
  )
}
