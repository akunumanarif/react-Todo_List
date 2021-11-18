//import logo from './logo.svg';
// import './App.css';
//import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
function App() {
  return (
    <div>
      <div className="container"></div>
      <div className="row">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        
      </div>
    </div>
  );
}

export default App;
