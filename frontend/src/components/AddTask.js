import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

class AddTask extends Component {
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
    console.log('clicked')
  }

  render() {
    if (this.state.expanded) {
        return (
        <div className="card bg-transparent border-dark shadow-sm new-task-card">
            <div className="input-group">
                <input ref={input => input && input.focus()} type="text" className="form-control" id={this.props.elID}placeholder="New task" aria-label="New task" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-transparent border-dark shadow-sm new-task-card dimmed" onClick={this.handleClick}>
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


export default AddTask;
