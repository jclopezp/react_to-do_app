import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import tasks from './samples/tasks.json';

// Agregando componentes
import Tasks from './components/tasks';
import TaskForm from './components/TaskForm'
import Posts from './components/Posts';
// console.log(tasks);

class App extends React.Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    //console.log(title, description);
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    //console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks})
    console.log(newTasks);
  }

  checkDone = (id) => {
    const newTask = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTask})
  }

  render() {
    //this.addTask()
    return <div>
    <Router>

      <Link to="/">Home</Link>
      <br />
      <Link to="/posts">Posts</Link>
      <br />
      <Link to="/demo">Demo</Link>

      <Route exact path="/" render={() => {
        return <div>
          <TaskForm addTask = {this.addTask} />
          {/* { this.state.tasks.map(element => <h1>{element.title}</h1>) } */}
          <Tasks
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            checkDone={this.checkDone}
          />
        </div>
      }}>
      </Route>

      <Route path="/posts" component={Posts} />

      <Route path="/demo" render={() => {
        return <div>
          <h1>Página de demo del uso de router</h1>
        </div>
      }}>
      </Route>

    </Router>
    </div>
  }
}

export default App;