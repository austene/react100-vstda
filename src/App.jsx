import React, { Component } from 'react';
import InputForm from './components/InputForm';
import DisplayView from './components/DisplayView';

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
  }

  handleEventType(type, id) {
    const items = this.state.todos;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        switch (type) {
          case 'completed':
            items[i].completed = !items[i].completed;
            break;
          case 'editEnabled':
            items[i].editEnabled = !items[i].editEnabled;
            break;
          case 'delete':
            items.splice(i, 1);
            break;
          default:
        }
        this.setState({ todos: items });
      }
    }
  }

  handleSaveEdit(id, todo, priority) {
    const items = this.state.todos;
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == id) {
        items[i].todo = todo;
        items[i].priority = priority;
        items[i].editEnabled = !items[i].editEnabled;
      }
    }
    this.setState({ todos: items });
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
            <InputForm
              todos={ this.state.todos }
              addTodo={ this.addTodo }
            />
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
