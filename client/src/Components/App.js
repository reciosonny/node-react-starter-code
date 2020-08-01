import React, { Component, useEffect, useState } from "react";
import { hot } from "react-hot-loader";
import axios from "axios"; //for doing CRUD operations in API via ajax calls

const App = () => {
  const [todos, setTodos] = useState([]);
  const [txtVal, setTxtVal] = useState("");

  // lifecycle hook (after the UI is done loading..)
  useEffect(() => {
    setTimeout(() => {

      //ajax call.
      //study HTTP methods (GET, POST)
      axios.get("http://localhost:5000/api/todos").then((res) => setTodos(res.data)); //port proxy
    }, 2000);

    return () => {};
  }, []);


  const onAddNewTodo = () => {
    axios.post("http://localhost:5000/api/todos", { name: txtVal })
      .then(res => {
        setTxtVal("");

        axios.get("http://localhost:5000/api/todos").then((res) => setTodos(res.data));
      })
      .catch(ex => {
        alert("Something went wrong. Please check the server API and try again");

        console.error(ex);
      });
  }

  

  return (
    <>
      <h1>Todo list</h1>

      <ul>
        {todos.map((todo) => (
          <li>{todo.name}</li>
        ))}
        {todos.length === 0 && <div>data still loading...</div>}
      </ul>

      <div>
        <input
          type="text"
          value={txtVal}
          onChange={(e) => setTxtVal(e.target.value)}
        />

        <button onClick={() => onAddNewTodo()}>Add new todo</button>
      </div>
    </>
  );
};

export default hot(module)(App);
