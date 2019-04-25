// import React from 'react';
import React, { Component } from 'react';
import NoItems from './NoItems';
// import RowList from './RowList';
import RowItem from './RowItem';
import EditItem from './EditItem';


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
            { console.log(`hello from DisplayView render ${this.props.todo}`) }
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


// const DisplayView = ({ todos }) => {
//   // if (!todos.length) {
//   return (
//     <NoItems />
//   );
// };


  // function DisplayView({ text, state }) {
  //   return (
  //     <div>
  //       {(function() {
  //         switch (state) {
  //           case '1st option':
  //             return <NoItems text={ text } />;
  //           case '2nd option':
  //             return <RowItem />;
  //           case '3rd option':
  //             return <EditItem />;
  //           default:
  //             return null;
  //         }
  //       })()}
  //     </div>
  //   );
  // }

  // const DisplayView = () => (
  //   <div className='panel panel-default'>
  //     <div className='panel-heading'>View Todos</div>
  //     <div className='panel-body'>
  //       <NoItems />
  //       <RowItem />
  //       <EditItem />
  //     </div>
  //   </div>
  // );

export default DisplayView;
