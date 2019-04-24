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
    editEnabled: true,
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
    this.handleEventType = this.handleEventType.bind(this);
  }
  addTodo(event) {
    event.preventDefault();
    function addItem(todo, priority) {
      console.log('add button clicked');
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
              completed: false
            }
          ]
        }
      );
    }
    const updatedTodos = this.state.todos.slice();
    updatedTodos.push(addItem);
    this.setState({ todos: updatedTodos });
  }
  handleEventType(type, id) {
    let items = this.state.todos;
    for (let i = 0; i <items.length; i++) {
      if (items[i].id == id) {
        switch (type) {
          case 'completed':
            items[i].completed = !items[i].completed;
            this.setState({ todos: items });
            console.log(`checkbox clicked - rowitem completed status is ${items[i].completed}`);
            break;
          case 'editEnabled':
            items[i].editEnabled = !items[i].editEnabled;
            this.setState({ todos: items });
            console.log(`editIcon clicked - row item editEnabled status is ${items[i].editEnabled}`);
            break;
          case 'delete':
            items.splice(i, 1);
            this.setState({ todos: items });
            console.log('deleteIcon clicked - row item deleted from app todos Array');
            break;
          default:
        }
      }
    }
  }


  render() {
    console.log('before return');
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
            <DisplayView
              todos={ this.state.todos }
              handleEventType={ this.handleEventType }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
