import React, { Component } from "react";
import PropTypes from "prop-types";

class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  };
  state = {
      complete: this.props.data.completed,
    };


  render() {
    if (this.state.complete) {
        return (
            <div className="card bg-dark shadow-sm task dimmed" key={this.props.key}>
                <div className="task-checkbox-area" key={this.props.data.id}>
                    <i className="fas fa-check-circle"></i>
                </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-dark shadow-sm task" key={this.props.key}>
            <div className="task-checkbox-area" onClick={() => this.setState({complete: true})} key={this.props.key}>
                <i className="far fa-circle"></i>
            </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
        </div>
    )
  }
}


export default Task;
