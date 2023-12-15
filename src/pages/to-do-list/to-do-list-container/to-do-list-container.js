import React, { useState, useEffect } from "react";

import styles from "./to-do-list-container.module.scss";

export default function ToDoListContainer(props) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {}, []);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(index) {
    let arr = todos.filter((item, i) => i !== index);
    setTodos(arr);
  }

  return (
    <main className={styles.to_do_list_container_container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="todo">Todo Name :</label>
          <input
            type="text"
            name="todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {/* list down all todo */}
      {todos.map((todo, index) => {
        return (
          <div key={index} className={styles.list_item}>
            <li>{todo}</li>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        );
      })}
    </main>
  );
}
