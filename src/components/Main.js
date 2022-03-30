import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// Tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tarefas: [],
    index: -1,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (tarefas.indexOf(newTask) !== -1) return;

    const newTasks = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tarefas: [...newTasks],
        newTask: '',
        index: -1,
      });
    }
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;

    this.setState({
      index,
      newTask: tarefas[index],
    });
  };

  handleDelete = (d, index) => {
    const { tarefas } = this.state;
    const newTasks = [...tarefas];

    newTasks.splice(index, 1);

    this.setState({
      tarefas: [...newTasks],
    });
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render() {
    const { newTask, tarefas } = this.state;

    return (
      <div className="main">

        <h1>Lista de Tarefas:</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input onChange={this.handleChange} type="text" value={newTask} />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit onClick={(e) => { this.handleEdit(e, index); }} className="edit" />
                <FaWindowClose onClick={(e) => { this.handleDelete(e, index); }} className="delete" />
              </div>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}
