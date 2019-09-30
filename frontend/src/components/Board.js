import React, { Component } from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import AddTask from './AddTask';



class Board extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    
    getInputID = function (data) {
        return `board-input-id-${data.id}`;
    }
    getButtonID = function (data) {
        return `board-button-id-${data.id}`;
    }
    renderTask = function (data, onClick) {
        return data.map((t) => 
            <Task data={t} onClick={onClick} uri={t.resource_uri} />
        );
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
        .then(function (data) {
            let tasks = this.state.tasks + data;
            this.setState({ tasks: tasks });
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
                <AddTask onSubmit={this.handleSubmit} endpoint="/api/v1/task/" inputID={this.getInputID(this.props.data)} buttonID={this.getButtonID(this.props.data)} />
                {this.renderTask(this.state.tasks, this.props.data.onClick)}
            </div>
        </div>
      )
    }
  }

export default Board;
