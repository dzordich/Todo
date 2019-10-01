import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import Task from "./Task";
import AddTask from './AddTask';



const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  
  return result;
};

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
});

const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : "grey",
  ...draggableStyle
});

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addNew = this.addNew.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.state = {
      tasks: this.props.data.tasks
    };
  }
  static propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
    resourceURI: PropTypes.string.isRequired,
    userURI: PropTypes.string.isRequired
  };
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
      
      this.setState({
        tasks: items
      });
    }
  getInputID = function (data) {
    return `board-input-id-${data.id}`;
  }
  getButtonID = function (data) {
    return `board-button-id-${data.id}`;
  }
  renderTask = function (data) {
    return this.state.tasks.map((t, index) => 
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
          <Task data={t} uri={t.resource_uri} />
        </div>
      )}
    </Draggable>
    )}
  addNew = (nt) => {
    let tasks = this.state.tasks;
    tasks.unshift(nt);
    this.setState({ tasks: tasks });
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
                      <Task data={t} uri={t.resource_uri} />
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
                