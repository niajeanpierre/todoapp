import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
/* The line `import { v4 as uuidv4 } from 'uuid';` is importing the `v4` function from the `uuid`
library. The `uuid` library is used to generate unique identifiers. `v4` = version 4 UUIDs. */
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import { EditTodoForm } from './EditTodoForm'
uuidv4()

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([])

  /**
   * The addTodo function adds a new todo item to the todos array.
   */
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ])
    console.log(todos)
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Let's Be Productive !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  )
}
