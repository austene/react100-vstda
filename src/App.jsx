import React, { Component } from 'react';
import InputForm from './components/InputForm';
import DisplayView from './components/DisplayView';

const mockData = [
  {
    id: 0,
    todo: 'Take out the trash',
    priority: 1,
    editEnabled: false,
    completed: true
  },
  {
    id: 1,
    todo: 'Pick up milk from the store',
    priority: 2,
    editEnabled: false,
    completed: false
  },
  {
    id: 2,
    todo: 'Pick up kids from school',
    priority: 3,
    editEnabled: false,
    completed: false
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: mockData
    };
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(event) {
    event.preventDefault();
    function addItem(todo, priority) {
      // let title = this.title.value;
      // let priority = this.priority.value;
      this.setState(
        {
          todos: [
            {
              id: id++,
              title: this.title.value,
              priority: this.priority.value,
              editEnabled: false,
              done: false
            }
          ]
        }
      );
    }
    const updatedTodos = this.state.todos.slice();
    updatedTodos.push(addItem);
    this.setState({ todos: updatedTodos });
  }

  render() {
    return (
      <div className='container'>
        <div className='pageheader'>
          <h1>Very Simple Todo App</h1>
          <h3>Track all of the things</h3>
          <hr />
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <div className='panel panel-default'>
              {/* Input Form */}
              <div className='panel-heading'>Add New Todo</div>
              <div className='panel-body'>
                <div>
                  <label className='create-todo-text' htmlFor='title'>I want to...</label>
                  <textarea name='title' id='title' placeholder='Add a new Todo item' />
                </div>
                <div>
                  <label className='create-todo-priority' htmlFor='priority'>How much of a priority is this?</label>
                  <select name='priority' id='priority' placeholder='Select a Priority'>
                    <option value='1'>High</option>
                    <option value='2'>Medium</option>
                    <option value='3'>Low</option>
                  </select>
                </div>
              </div>
              <div className='panel-footer'>
                <button
                  className='btn btn-success btn-large btn-block'
                  type='button'
                  name='addTodo'
                  onClick={ this.addTodo }
                >ADD
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <DisplayView todos={ this.state.todos } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
