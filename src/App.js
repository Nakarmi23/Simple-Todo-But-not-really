import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [todo, setTodo] = useState([]);
  let [name, setTodoName] = useState('');
  let [date, setTodoDate] = useState('');

  function handleTodoNameChange(event) {
    setTodoName(event.target.value);
  }

  function handleTodoDateChange(event) {
    setTodoDate(event.target.value);
  }

  function handleTodoSubmitChange(event) {
    // preventing form submit to reload page
    event.preventDefault();
    const newTodo = { name, date: new Date(date) };
    // creating new object for todo list
    let newTodoList = [...todo];
    newTodoList.push(newTodo);
    setTodo(newTodoList);
    // resetting input field
    setTodoName('');
    setTodoDate('');
  }

  function handleTodoClick(event, index) {
    // cloning todo list so That a New object is created
    let newTodoList = [...todo];
    // removing item from index
    newTodoList.splice(index, 1);
    setTodo(newTodoList);
  }

  function onTodoCheck(event, index) {
    // cloning todo list so That a New object is created
    let newTodoList = [...todo];
    // updating item from index with isCheck prop
    newTodoList[index] = {
      ...newTodoList[index],
      isCheck: event.target.checked,
    };
    setTodo(newTodoList);

    // let car ={color: 'red', name: 'some car'};
    // let ujan = {...car, age: 21};
    // ujan ={color: 'red', name: 'some car', age: 21};
  }

  return (
    <div className='App'>
      <form onSubmit={handleTodoSubmitChange}>
        <input type='text' value={name} onChange={handleTodoNameChange} />
        <input type='date' value={date} onChange={handleTodoDateChange} />
        <button type='submit'>Submit</button>
      </form>
      {
        // Todo list
      }
      <ul>
        {todo.map((item, index) => (
          <li className={'todoItem'} key={item.date}>
            <input
              type='checkbox'
              checked={item.isCheck ?? false}
              onChange={(event) => onTodoCheck(event, index)}
            />
            <p
              className={item.isCheck ? 'check' : null}
              onClick={(event) => handleTodoClick(event, index)}>
              {item.name} {item.date.getDay()}-{item.date.getMonth()}-
              {item.date.getYear()} AD
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// // ternary operator
// item.isCheck === null || item.isCheck === undefined ? false : item.isCheck;

// // traditional if statement
// if (item.isCheck === null || item.isCheck === undefined) {
//   return false;
// } else {
//   return item.isCheck;
// }
