import React, { Component } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";


class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    uri: PropTypes.string.isRequired,
    handleComplete: PropTypes.func.isRequired,
    undoComplete: PropTypes.func.isRequired
  };
  state = {
      complete: this.props.data.completed,
      classes: "card bg-dark shadow-sm task dimmed"
    };

  handleClick = () => {
    if (this.state.complete){
        this.setState({complete: false});
        this.props.undoComplete(this.props.data.id);
    } else {
        this.setState({complete: true, classes: this.state.classes + " bounce-top"});
        this.props.handleComplete(this.props.data.id);
    }
    let dict = { "completed": !this.state.complete };
    let csrftoken = Cookies.get('csrftoken');
    fetch(this.props.uri, {
        method: 'PATCH',
        headers: {
            "Content-Type": `application/json`,
            "X-CSRFToken": csrftoken
        },
        body: JSON.stringify(dict)
    })
  }

  render() {
    if (this.state.complete) {
        return (
            <div className={this.state.classes} key={this.props.data.id} id={"task-id-" + this.props.data.id}>
                <div className="task-checkbox-area" onClick={this.handleClick} key={this.props.data.id}>
                    <a href="#" role="button"><i className="fas fa-check-circle"></i></a>
                </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
            <a className="badge badge-pill badge-danger delete-button"><i className="far fa-times-circle delete-icon"></i></a>
        </div>
        )
    }
    return (
        <div className="card bg-dark shadow-sm task" key={this.props.key}>
            <div className="task-checkbox-area" onClick={this.handleClick} key={this.props.key}>
            <a href="#" role="button" data-target=".task" aria-hidden="true"><i className="far fa-circle"></i></a>
            </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
        </div>
    )
  }
}


export default Task;
