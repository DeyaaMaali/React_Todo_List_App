import React, { Component } from 'react';

export default class AddItem extends Component {
    state = {
      title: ""
    }

    addTitle = (x) => {
      this.setState({title: x.target.value })
    }
  
  render() {
    return (
      <React.Fragment>
       <input type="text" onChange ={this.addTitle} />
        <input type ="button" value ="add item" onClick={this.props.adddata.bind(this, this.state.title )}/>
      </React.Fragment>
    );
  }
}
