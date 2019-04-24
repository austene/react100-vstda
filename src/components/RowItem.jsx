import React, { Component } from 'react';
import EditItem from './EditItem';
import { isNullOrUndefined } from 'util';

class RowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todo,
      priority: this.props.priority
    };
    this.handleEditTodo = this.handleEditTodo.bind(this);
  }
  handleEditTodo(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let strikeThrough;
    if (this.props.completed) {
      strikeThrough = 'strike-through';
    }
    console.log('strikeThrough is ' + strikeThrough);
    return (
      <li className='list-group-item'>
        {!this.props.editEnabled ? (
          <div>
            <span>
              <input
                type='checkbox'
                id='todoCheckbox'
                defaultChecked={ this.props.completed }
                onClick={ () => this.props.handleEventType(this.props.id) }
              />
            </span>
            <label className={ `form-check-label ${strikeThrough}` } htmlFor='todoCheckbox'>{ this.props.todo }</label>
            <div className='pull-right'>
              <a
                id='todoEdit'
                onClick={ () => this.props.handleEventType(this.props.id) }
              ><i className='far fa-edit' />
              </a>
              <a
                id='todoDelete'
                onClick={ () => this.props.handleEventType(this.props.id) }
              ><i className='far fa-trash-alt' />
              </a>
              </div>
          </div>
        ) : (
          <div className='panel'>
            <div className='panel-success'>
              <label htmlFor='update-todo-text'>Description</label>
              <textarea
                name='update-todo-text'
                value={ this.props.todo }
                onChange={ this.handleEditTodo }
              />
              <label htmlFor='update-todo-priority'>Priority</label>
              <select
                name='update-todo-priority'
                value={ this.props.priority }
                onChange={ this.handleEditTodo }
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
