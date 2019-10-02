import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import Task from "./Task";
import AddTask from './AddTask';
import Cookies from 'js-cookie';

const organize = (data) => {
  let completed = [];
  let incomplete = [];
  for(let x in data){
    if (data[x].completed) {
      completed.push(data[x]);
    } 
    else { incomplete.push(data[x]) 
    }      
  }
  return incomplete.concat(completed); 
}

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  
  return result;
};

const taskEquals = (task1, task2) => task1.id === task2.id

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.addNew = this.addNew.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.updatePositions = this.updatePositions.bind(this);
    this.state = {
      tasks: organize(this.props.data.tasks)
    };
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
    resourceURI: PropTypes.string.isRequired,
    userURI: PropTypes.string.isRequired
  };
  updatePositions = (data) => {
    let completed = [];
    let incomplete = [];
    for(let x in data){
      if (data[x].completed) {
        completed.push(data[x]);
      } 
      else { incomplete.push(data[x]) 
      }      
    }
    let newOrder = incomplete.concat(completed); 
    this.setState({
      tasks: newOrder
    });
    let places = [];
    for (let i = 0; i < data.length; i++) {
      places.push({'pk': data[i].id, 'index': i});
    }
    let csrftoken = Cookies.get('csrftoken');
    fetch('/api/positions/', {
      method: 'PATCH',
      headers: {
        "Content-Type": `application/json`,
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(places)
    });
  }
  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    
    const items = reorder(
      this.state.tasks,
      result.source.index,
      result.destination.index
      );
      
      this.updatePositions(items);

    }
  getInputID = function (data) {
    return `board-input-id-${data.id}`;
  }
  getButtonID = function (data) {
    return `board-button-id-${data.id}`;
  }
  addNew = (nt) => {
    let tasks = this.state.tasks;
    tasks.unshift(nt);
    this.updatePositions(tasks);
  }
  handleSubmit = (user, content) => {
    console.log(user, content);
    let t = {
      "user": this.props.userURI,
      "content": content,
      "board": this.props.resourceURI,
      "completed": false
    }
    fetch("/api/v1/task/", {
      method: 'POST',
      headers: {
        "Content-Type": `application/json`
      },
      body: JSON.stringify(t)
    }).then(res => res.json())
    .then((data) => {
      this.addNew(data);
    })
    return;
  }
  handleComplete = (taskID) => {
    console.log("got back to board")
    let completed = [];
    let incomplete = [];
    let taskToUpdate;
    let x = -1;
    for (let i = 0; i < this.state.tasks.length; i++) {
      if (this.state.tasks[i].id == taskID) {
        taskToUpdate = this.state.tasks[i];
      }
      else if (this.state.tasks[i].completed) {
        completed.push(this.state.tasks[i]);
      } 
      else { incomplete.push(this.state.tasks[i]) 
      }      
    }
    incomplete.push(taskToUpdate);
    let updated = incomplete.concat(completed);
    console.log(updated);
    this.setState({ tasks: updated });
    let places = [];
    for (let i = 0; i < updated.length; i++) {
      places.push({'pk': updated[i].id, 'index': i});
    }
    let csrftoken = Cookies.get('csrftoken');
    fetch('/api/positions/', {
      method: 'PATCH',
      headers: {
        "Content-Type": `application/json`,
        "X-CSRFToken": csrftoken
      },
      body: JSON.stringify(places)
    });
  }
  
  render() {
    return (
            
            
  <div className="card bg-light shadow board">
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        <li className="nav-item">
          <span className="nav-link active"><strong className="text-body">{this.props.data.name}</strong></span>
        </li>
      </ul>
    </div>
    <div className="card-body board-body">
      <DragDropContext onDragEnd={this.onDragEnd}>
        <AddTask onSubmit={this.handleSubmit} endpoint="/api/v1/task/" inputID={this.getInputID(this.props.data)} buttonID={this.getButtonID(this.props.data)} />
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
              {this.state.tasks.map((t, index) => 
                <Draggable key={t.date} draggableId={t.id} index={index}>
                {(provided, snapshot) => (
                  <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                    )}>  
                      <Task data={t} uri={t.resource_uri} handleComplete={this.handleComplete} />
                    </div>)}
                  </Draggable>
                )}
              {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
  </div>
    )
  }
}

export default Board;
                