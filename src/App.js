import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      },
      {
        task: 'Bake Cookies',
        id: 1528817084358,
        completed: false
      }],

    }

  }

  toggleTodo = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newItem]
    });

  };


  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed
      })
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div className="App">
          <div className='header'>
            <TodoForm addItem={this.addItem} />
          </div>
          <TodoList
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}

          />
        </div>
      </div>
    );
  }
}
export default App;