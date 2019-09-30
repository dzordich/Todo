import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

class Task extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    endpoint: PropTypes.string.isRequired,
    elID: PropTypes.string.isRequired
  };
  state = {
      expanded: false
    };

  handleClick = () => {
    this.setState({ expanded: true });
    $(`#${this.props.elID}`).trigger('focus')
    let dict = { "completed": !this.state.complete };
    fetch(this.props.endpoint, {
        method: 'POST',
        headers: {
            "Content-Type": `application/json`
        },
        body: JSON.stringify(dict)
    })
    .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      });
  }

  render() {
    if (this.state.expanded) {
        return (
        <div className="card bg-transparent border-dark shadow-sm new-task-card">
            <div className="input-group">
                <input type="text" className="form-control" id={this.props.elID}placeholder="New task" aria-label="New task" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-transparent border-dark shadow-sm new-task-card dimmed">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="New task" aria-label="New task" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
                </div>
            </div>
        </div>
    )
  }
}


export default Task;
