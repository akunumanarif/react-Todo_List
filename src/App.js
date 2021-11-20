// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  function handleDeleteAll() {
    setTodos([])
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
      id: new Date().getMilliseconds(),
      text: todo,
      completed: false,

    }

    setTodos([...todos].concat(newTask))
    setTodo("")
    
  }

  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(updatedTodos)
  }

  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }
    )
    setTodos(updatedTodos)
  }

  

  return (
    <div className="App">
      <div className="header">Write your Task</div>
      <div className="boxHeader">
        <form className='myForm' onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)}
            value={todo} placeholder="Type something ..."/>
            <button className="submitButton" type="submit">Add Task</button>
            
        </form>
      </div>
      
      
      <div className="headerTask">Your Task Here </div> 

      <div className="isiTask">
      {todos.map((todo) => 
      <div className="allText" key={todo.id}>
        <div>{todo.text} <button className="delete-todo" onClick={() => deleteTodo(todo.id)}>Delete</button>
        <input className="check-box"
        type="checkbox" 
        onChange={() => toggleComplete(todo.id)}
        checked={todo.completed}
        /></div>
        
      </div>)}
        </div> 
      
      
      
      
      
      
    </div>
  );
}

export default App;
