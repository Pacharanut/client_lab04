import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
//import Github from "./github";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework' ,place: 'Andaman'},
               {id: 2, task: 'Read book',place: 'Phuket'}],
       id:3
   }

   addTask = (task,place) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,place} ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <br/>
        
           </div>
       );
   }
}

export default App;