import React, { Component } from 'react';

/* export default class TaskFrom extends Component { */
class TaskForm extends Component {

  state = {
    title: '',
    description: ''
  }

  onSubmit = event => {
    //console.log(this.state)
    this.props.addTask(this.state.title, this.state.description);
    event.preventDefault();
  }

  onChange = event => {
    //console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    //console.log(this.props)
    return (
    <form onSubmit={this.onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Escribe una tarea" 
        onChange={this.onChange} 
        value={this.state.title}
        />
      <br />
      <br />
      <textarea
        name="description"
        placeholder="Escribe una descripción de la tarea" 
        onChange={this.onChange} 
        value={this.state.description}>

      </textarea>
      <br />
      <input type="submit" />
      <button type="submit">
        Guardar
      </button>
      
    </form>
    )
  }

}

export default TaskForm;