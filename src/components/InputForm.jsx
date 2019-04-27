import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      priority: 'select',
    };
    this.handleOnChangeAddTodo = this.handleOnChangeAddTodo.bind(this);
  }
  handleOnChangeAddTodo(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name]);
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>Add New Todo</div>
        <div className='create-todo panel-body'>
          <div>
            <label className='create-todo-text' htmlFor='todo'>I want to...</label>
            <textarea
              className='create-todo-text'
              id='todo'
              name='todo'
              placeholder='Add a new Todo item'
              defaultValue={ this.state.todo }
              onChange={ this.handleOnChangeAddTodo }
            />
          </div>
          <div>
           <label className='create-todo-priority' htmlFor='priority'>How much of a priority is this?</label>
            <select
              className='create-todo-priority'
              id='priority'
              name='priority'
              placeholder='Select a Priority'
              defaultValue={ this.state.priority }
              onChange={ this.handleOnChangeAddTodo }
            >
              <option value='select'>Select</option>
              <option value='3'>High</option>
              <option value='2'>Medium</option>
              <option value='1'>Low</option>
            </select>
          </div>
          <button
            className='create-todo btn btn-success btn-large btn-block'
            // type='button'
            // name='addTodo'
            onClick={ () => this.props.addTodo (
              this.state.todo,
              this.state.priority
              )
            }
          >ADD
          </button>
        </div>
      </div>
    );
  }
}

export default InputForm;
