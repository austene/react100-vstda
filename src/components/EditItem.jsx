import React, { Component } from 'react';

class EditItem extends Component {

  render() {
    return (
      <div className='panel'>
        <div className='panel-success'>
          <label htmlFor='update-todo-text'>Description</label>
          <textarea name='update-todo-text' />
          <label htmlFor='update-todo-priority'>Priority</label>
          <select name='update-todo-priority'>
            <option value='1'>High</option>
            <option value='2'>Medium</option>
            <option value='3'>Low</option>
          </select>
          <button className='update-todo btn btn-success float-left'>Save</button>
        </div>
      </div>
    );
  }
}

export default EditItem;
