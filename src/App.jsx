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

let id = 3;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleEventType = this.handleEventType.bind(this);
    this.handleSaveEdit = this.handleSaveEdit.bind(this);
  }

  addTodo(addTodo, addPriority) {
    event.preventDefault();
    const items = this.state.todos;
    // const id = items.length;
    // const todo = todo.value;
    // const priority = priority.value;
    console.log(`id equals ${id}`);
    const todoToAdd = {
      id: id,
      todo: addTodo,
      priority: addPriority,
      editEnabled: false,
      completed: false
    };
    items.push(todoToAdd);
    this.setState({ todos: items });
    id++;
    console.log(`next id will equal ${id}`);
    console.log(`addTodo method ${this.state.todos[id].todo}`);
  }

  handleEventType(type, id) {
    const items = this.state.todos;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        switch (type) {
          case 'completed':
            items[i].completed = !items[i].completed;
            console.log(`checkbox clicked - rowitem completed status is ${items[i].completed}`);
            break;
          case 'editEnabled':
            items[i].editEnabled = !items[i].editEnabled;
            console.log(`editIcon clicked - row item editEnabled status is ${items[i].editEnabled}`);
            break;
          case 'delete':
            items.splice(i, 1);
            console.log('deleteIcon clicked - row item deleted from app todos Array');
            break;
          default:
        }
        this.setState({ todos: items });
        console.log('todos updated.');
      }
    }
  }
  handleSaveEdit(id, todo, priority) {
    const items = this.state.todos;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        console.log('inside the SaveEdit if statement');
        items[i].todo = todo;
        items[i].priority = priority;
        items[i].editEnabled = !items[i].editEnabled;
      }
    }
    this.setState({ todos: items });
    console.log(`EditSave clicked and item 1: ${items[1].id} is now todo: ${items[1].todo} and priority: ${items[1].priority}`);
    console.log(`editEnabled status is ${items[1].editEnabled}`);
  }

  render() {
    // console.log('before return');
    return (
      <div className='container'>
        <div className='pageheader'>
          <h1>Very Simple Todo App</h1>
          <h3>Track all of the things</h3>
          <hr />
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <InputForm 
              todos={ this.state.todos }
              addTodo={ this.addTodo }
            />
              {/* Input Form */}
            {/* <div className='panel panel-default'>
              <div className='panel-heading'>Add New Todo</div>
              <div className='panel-body'>
                <div>
                  <label className='create-todo-text' htmlFor='todo'>I want to...</label>
                  <textarea
                    name='title'
                    id='todo'
                    placeholder='Add a new Todo item'
                    value=''
                  />
                </div>
                <div>
                  <label className='create-todo-priority' htmlFor='priority'>How much of a priority is this?</label>
                  <select
                    name='priority'
                    id='priority'
                    placeholder='Select a Priority'
                    value=''
                  >
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
            </div> */}
          </div>
          <div className='col-md-8'>
            <DisplayView
              todos={ this.state.todos }
              handleEventType={ this.handleEventType }
              handleSaveEdit={ this.handleSaveEdit }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
