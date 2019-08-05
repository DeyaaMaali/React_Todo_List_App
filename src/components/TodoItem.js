import React, { Component } from 'react';

export default class TodoItem extends Component {
  toggleComplete = (e) => {
    return e.target.checked
    }
  
  render() {
    const { title, isCompleted, id } = this.props.task;
    return (
      <React.Fragment>
        {/* <h6>TodoItem</h6> */}
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input type="checkbox" onChange={this.props.change.bind(this, this.toggleComplete, title, id)} />
          {title}
          
          
          <input type="button" value="Delete" onClick={this.props.delete.bind(this, id)}/>
          
          </p>
          

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}