import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from 'jquery';

const PAGE_USER = document.querySelector('#loggedIn').dataset['username'];

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.reset = this.reset.bind(this);
    this.state = {
      expanded: false,
      content: '',
      user: PAGE_USER,
      enter_pressed: false,
      submitted: false
    };
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    endpoint: PropTypes.string.isRequired,
    inputID: PropTypes.string.isRequired,
    buttonID: PropTypes.string.isRequired
  };
  
  reset() {
    this.setState({ expanded: false, content: '', enter_pressed: false, submitted: false });
    return;
  }
  handleChange = (e) => {
      console.log(e.target.value)
    this.setState({ expanded: true, content: e.target.value });
    document.getElementById(this.props.buttonID).addEventListener('click', () =>{
        if (this.state.submitted) return;
        this.setState({ submitted: true });
        this.props.onSubmit(this.state.user, document.getElementById(this.props.inputID).value);
        setTimeout(this.reset, 100)
        return;
    })
    document.getElementById(this.props.inputID).addEventListener("keyup", event => {
      if (event.key !== "Enter" || !document.getElementById(this.props.inputID).value || this.state.enter_pressed) return;
      this.setState({ enter_pressed: true });
      document.getElementById(this.props.buttonID).click()
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
  });
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
                <input type="text" className="form-control" id={this.props.inputID} placeholder="New task" aria-label="New task" onChange={this.handleChange} value=""></input>
                <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button" id={this.props.buttonID} disabled>Add</button>
                </div>
            </div>
        </div>
    )
  }
}


export default AddTask;
