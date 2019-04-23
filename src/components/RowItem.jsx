import React, { Component } from 'react';
import EditItem from './EditItem';

class RowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todo,
      priority: this.props.priority
    };
    this.editTodoChange = this.editTodoChange.bind(this);
  }
  editTodoChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <li className='list-group-item'>
        {!this.props.editEnabled ? (
          <div>
            <span>
              <input
                type='checkbox'
                value=''
                id='todoCheckbox'
              />
            </span>
            <label htmlFor='todoCheckbox'>{ this.props.todo }</label>
            <span className='pull-right'>
              <a href={ EditItem } id='todoEdit'>Edit Item</a>
            </span>
            <span className='pull-right'>
              Delete Item
            </span>
          </div>
        ) : (
          <div className='panel'>
            <div className='panel-success'>
              <label htmlFor='update-todo-text'>Description</label>
              <textarea
                name='update-todo-text'
                value={ this.props.todo }
                onChange={ this.editTodoChange }
              />
              <label htmlFor='update-todo-priority'>Priority</label>
              <select
                name='update-todo-priority'
                value={ this.props.priority }
                onChange={ this.editTodoChange }
              >
                <option value='1'>High</option>
                <option value='2'>Medium</option>
                <option value='3'>Low</option>
              </select>
              <button className='update-todo btn btn-success pull-right'>Save</button>
            </div>
          </div>
        )}
      </li>
    );
  }
}

export default RowItem;
