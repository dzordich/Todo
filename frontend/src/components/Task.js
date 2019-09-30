import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from 'js-cookie';

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
            <div className="card bg-dark shadow-sm task dimmed">
                <div className="task-checkbox-area">
                    <i className="fas fa-check-circle"></i>
                </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-dark shadow-sm task">
            <div className="task-checkbox-area">
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
