import React, { Component } from 'react';
import EditItem from './EditItem';

class RowItem extends Component {

  render() {
    return (
      <div>
        <span>
          <input
            type='checkbox'
            value=''
            id='itemDone'
          />
        </span>
        <span>
          todos text
        </span>
        <span className='pull-right'>
          <a href={ EditItem } id='itemDone'>Edit Item</a>
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
