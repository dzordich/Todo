import React, { Component } from "react";
import PropTypes from "prop-types";

const PAGE_USER = document.querySelector('#loggedIn').dataset['username'];

class AddBoard extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
      expanded: false,
      content: '',
      user: PAGE_USER
    };
  handleClick = () => {
      this.setState({ expanded: true });
  }
  handleChange = (e) => {
        console.log(e.target.value)
        this.setState({ expanded: true, content: e.target.value });
        document.getElementById("new-map-submit").addEventListener('click', () =>{
            this.props.onSubmit(document.getElementById("new-board-input-field").value);
            this.setState({ expanded: false, content: '' });
        })
        document.getElementById("new-board-input-field").addEventListener("keyup", event => {
            if (event.key !== "Enter" || !document.getElementById("new-board-input-field").value) return;
            document.getElementById("new-map-submit").click()
            event.preventDefault();
        });
        return;
  }

  render() {
    if (this.state.expanded) {
        return (
    <div className="card bg-light shadow board">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs new-board-header">
                <li className="nav-item">
                    <span className="nav-link active"><input id="new-board-input-field" autoFocus onChange={this.handleChange} type="text" className="form-control" placeholder="Board title" aria-label="Board title" value=""></input></span>
                </li>
                <li className="nav-item">
                    <div className="save-badge-cont">
                        <a id="new-map-submit" className="nav-link badge badge-info" href="#">Save</a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="card-body board-body dimmed">
            <div className="card bg-transparent border-dark shadow-sm new-task-card dimmed" >
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="New task" aria-label="New task" value="" disabled></input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" disabled>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
    return (
        <div className="card border-secondary text-secondary new-board bg-transparent">
            <div className="card-body mx-auto my-auto new-board-body">
                <a href="#" onClick={this.handleClick}><h5 className="card-title pb-0 mb-0 new-board-text"><strong className="new-board-text"><i className="fas fa-plus new-board-text"></i> Add Board</strong></h5></a>
            </div>
        </div>

    )
  }
}


export default AddBoard;