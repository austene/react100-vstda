import React from 'react';
import RowItem from './RowItem';

const RowList = ({ todos }) => (
  {props.todos.map(item => (
    <RowItem
      id={ todos.id }
      title={ todos.title }
      priority={ todos.priority }
      editEnabled={ todos.editEnabled }
      done={ todos.done }
    />
  ))}
)

export default RowList;
