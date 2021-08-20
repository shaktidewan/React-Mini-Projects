import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Todo = props => {
  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
      axios.get('https://todolist-4a0fc-default-rtdb.firebaseio.com/todos.json').then(result=>{
          
          console.log(result);
          const todoData = result.data; //lists of objects stored in keys
          console.log("todoData:",todoData);
          const todos = []; //empty array to store objects 
          console.log("todos:",todos);
          for(const key in todoData) {
              todos.push({id:key, name: todoData.name})
              console.log("Inside Loop",todos);
          }
          setTodoList(todos);
          console.log("Outside loop",todos);
      });

    //   return () => {
    //       cleanup
    //   }
  }, [])

  const inputChangeHandler = event => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = () => {
    setTodoList(todoList.concat(todoName));
    axios.put('https://todolist-4a0fc-default-rtdb.firebaseio.com/todos.json', {name: todoName}).then(
        res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangeHandler}
        value={todoName}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {todoList.map(todo => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
