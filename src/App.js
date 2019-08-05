import React, { Component } from 'react';
import Todos from './components/Todos';
import AddItem from './components/addItem';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Download Zoom",
        isCompleted: false
      },
      {
        id: 2,
        title: "Eat Fried Chicken",
        isCompleted: false
      },
      {
        id: 3,
        title: "Play Games",
        isCompleted: false
      },
      {
        id: 4,
        title: "Go for Shopping",
        isCompleted: false
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };

  
  changeData = (e,x,y) => {
    console.log(e)
    console.log(x)
  console.log(y)

    let copyTasks = [...this.state.tasks]
    // for(let i = 1; i<=5; i++)
      // if(id ===i)
      if (copyTasks[y-1].isCompleted)
      copyTasks[y-1].isCompleted = false;
      else
      copyTasks[y-1].isCompleted = true;
        
      this.setState({ tasks: copyTasks });
  }

  deleteData = (ID) =>{
  this.setState({tasks: this.state.tasks.filter((elem)=> ID !== elem.id
    )})
  }

  addData = (addeditem) => {
    // let copyAdditem = [...tasks]
    let a = {
      id : 6,
      isCompleted: false,
      title: addeditem
    }
    this.setState({tasks:[...this.state.tasks, a]})
  }

  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <h6>App</h6>
        <AddItem adddata = {this.addData}/>
        <Todos tasks={tasks} changedata = {this.changeData} deletedata = {this.deleteData} />
      </React.Fragment >
    );
  }
}