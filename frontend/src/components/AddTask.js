import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

const PAGE_USER = document.querySelector('#loggedIn').dataset['username'];

class AddTask extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    endpoint: PropTypes.string.isRequired,
    inputID: PropTypes.string.isRequired,
    buttonID: PropTypes.string.isRequired
  };
  state = {
      expanded: false,
      content: '',
      user: PAGE_USER
    };

  handleChange = (e) => {
      console.log(e.target.value)
    this.setState({ expanded: true, content: e.target.value });
    document.getElementById(this.props.buttonID).addEventListener('click', () =>{
        this.props.onSubmit(this.state.user, document.getElementById(this.props.inputID).value);
    })
    return;
  }

  render() {
    if (this.state.expanded) {
        return (
        <div className="card bg-transparent border-dark shadow-sm new-task-card">
            <div className="input-group">
                <input type="text" className="form-control" id={this.props.inputID} placeholder="New task" aria-label="New task" aria-describedby="button-addon2"></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id={this.props.buttonID}>Add</button>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-transparent border-dark shadow-sm new-task-card dimmed" >
            <div className="input-group">
                <input type="text" className="form-control" placeholder="New task" aria-label="New task" onChange={this.handleChange}></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id={this.props.buttonID} disabled>Add</button>
                </div>
            </div>
        </div>
    )
  }
}


export default AddTask;
