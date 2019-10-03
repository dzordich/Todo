import React, { Component } from "react";
import PropTypes from "prop-types";

const PAGE_USER = document.querySelector('#loggedIn').dataset['username'];

class AddBoard extends Component {
  constructor(props) {
    super(props);
    this.escape = this.escape.bind(this);
    this.state = {
      expanded: false,
      content: '',
      user: PAGE_USER
    };
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
      
    };
  escape = () => this.setState({ expanded: false, content: '' })
  handleClick = () => {
      this.setState({ expanded: true });
      
  }
  handleChange = (e) => {

        this.setState({ expanded: true, content: this.state.content + e.target.value });
        document.getElementById("new-map-submit").addEventListener('click', () =>{
            this.props.onSubmit(document.getElementById("new-board-input-field").value);
            this.escape;
        })
        document.getElementById("new-board-input-field").addEventListener("keyup", event => {
            if (event.key !== "Enter" || !document.getElementById("new-board-input-field").value) return;
            document.getElementById("new-map-submit").click()
            event.preventDefault();
        });
  }
  componentDidUpdate() {
    var newBoardArea = document.getElementById('newboard')
    // go back to collapsed state if user clicks anywhere else on page
    if (document.getElementById('newboard') && this.state.expanded){
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.add-board-component')) {
                this.escape();
                return;
            }
            return;
        })
        document.addEventListener('keydown', (event) => {
            if (event.key === "Escape") {
                this.escape();
                return;
            }
        })
    }
    else { return; }
  }
  render() {
    if (this.state.expanded) {
        return (
    <div className="card bg-light shadow board add-board-component" id="newboard">
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs new-board-header">
                <li className="nav-item">
                    <span className="nav-link active"><input id="new-board-input-field" autoFocus onChange={this.handleChange} type="text" className="form-control" placeholder="Board title" aria-label="Board title"></input></span>
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