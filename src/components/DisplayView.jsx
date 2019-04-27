import React, { Component } from 'react';
import NoItems from './NoItems';
import RowItem from './RowItem';

class DisplayView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let noItemView;
    if (!this.props.todos.length) {
      noItemView = <NoItems />;
    }

    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>View Todos</div>
        <div className='panel-body'>
          <ul className='list-group'>
            {noItemView}
            { this.props.todos.map(todo => (
              <RowItem
                key={ todo.id }
                id={ todo.id }
                todo={ todo.todo }
                priority={ todo.priority }
                editEnabled={ todo.editEnabled }
                completed={ todo.completed }
                handleEventType={ this.props.handleEventType }
                handleSaveEdit={ this.props.handleSaveEdit }
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default DisplayView;
