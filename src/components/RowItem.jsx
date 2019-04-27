import React, { Component } from 'react';
import EditItem from './EditItem';

class RowItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: this.props.todo,
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

    let priorityHighlight;
    if (this.props.priority === '1') {
      priorityHighlight = 'list-group-item-danger';
    } else if (this.props.priority === '2') {
      priorityHighlight = 'list-group-item-warning';
    } else if (this.props.priority === '3') {
      priorityHighlight = 'list-group-item-success';
    }

    return (
      <li className={ `list-group-item ${priorityHighlight}` }>
        {!this.props.editEnabled ? (
          <div>
            <span>
              <input
                type='checkbox'
                id='todoCheckbox'
                defaultChecked={ this.props.completed }
                onClick={ () => this.props.handleEventType('completed', this.props.id) }
              />
            </span>
            <label className={ `form-check-label ${strikeThrough}` } htmlFor='todoCheckbox'>{ this.props.todo }</label>
            <div className='pull-right'>
              <a
                className='edit-todo'
                id='todoEditIcon'
                onClick={ () => this.props.handleEventType('editEnabled', this.props.id) }
              ><i className='far fa-edit' />
              </a>
              <a
                className='delete-todo'
                id='todoDeleteIcon'
                onClick={ () => this.props.handleEventType('delete', this.props.id) }
              ><i className='far fa-trash-alt' />
              </a>
              </div>
          </div>
        ) : (
          // EditView
          <div className='panel'>
          { console.log('EditItem view rendered')}
            <div className='panel-success'>
              <label htmlFor='update-todo-text'>Description</label>
              <textarea
                className='update-todo-text'
                id='todo'
                name='todo'
                defaultValue={ this.state.todo }
                onChange={ this.handleEditTodo }
              />
              <label htmlFor='update-todo-priority'>Priority</label>
              <select
                className='update-todo-priority'
                id='priority'
                name='priority'
                defaultValue={ this.state.priority }
                onChange={ this.handleEditTodo }
              >
                <option value='1'>High</option>
                <option value='2'>Medium</option>
                <option value='3'>Low</option>
              </select>
              <button
                className='update-todo btn btn-success pull-right'
                onClick={ () => this.props.handleSaveEdit (
                  this.props.id,
                  this.state.todo,
                  this.state.priority
                  )
                }
              >Save
              </button>
            </div>
          </div>
        )}
      </li>
    );
  }
}

export default RowItem;
