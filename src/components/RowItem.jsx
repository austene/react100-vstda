import React, { Component } from 'react';
import EditItem from './EditItem';

class RowItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
      // <div key={ NoItems.objectID }>
    );
  }
}

export default RowItem;
