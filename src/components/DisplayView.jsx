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
    let display;
    if (!this.props.todos.length) {
      display = <NoItems />;
    }

    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>View Todos</div>
        <div className='panel-body'>
          <ul className='list-group'>
            {display}
            {/* { this.props.todos[0].todo } */}
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
