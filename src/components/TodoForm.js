import React, {useState} from 'react'

export const TodoForm = (/* `{addTodo}` is a destructured prop passed to the `TodoForm` component. It
allows the `TodoForm` component to access the `addTodo` function from its
parent component. This function is typically used to add a new todo item to
a list or perform any other action related to adding a todo. */
{addTodo}) => {
  /* `const [value, setValue] = useState("")` is using the `useState` hook in React to create a state
  variable called `value` and a function called `setValue` to update the value. The initial value of
  `value` is set to an empty string `""`. */
  const [value, setValue] = useState("")

  /**
   * The handleSubmit function prevents the default form submission behavior and adds a todo item.
   */
  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);

    setValue("");
  }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input'value={value} placeholder='Create a Task'
      /* `onChange={(e) => setValue(e.target.value)}/>` is an event handler that is triggered when the
      value of the input field changes. It takes the event object `e` as a parameter and updates the
      state variable `value` with the new value of the input field. `e.target.value` refers to the
      value of the input field that triggered the event. */
      onChange={(e) => setValue(e.target.value)}/>
      <button type="submit" className='todo-button'> + Add Task</button>
    </form>
  )
}
