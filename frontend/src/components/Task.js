import React, { Component } from "react";
import PropTypes from "prop-types";



  



class Task extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    uri: PropTypes.string.isRequired,
    handleComplete: PropTypes.func.isRequired
  };
  state = {
      complete: this.props.data.completed,
    };

  handleClick = () => {
    if (this.state.complete){
        this.setState({complete: false});
    } else {
        this.setState({complete: true});
    }
    this.props.handleComplete(this.props.data.id)
    let dict = { "completed": !this.state.complete };
    fetch(this.props.uri, {
        method: 'PATCH',
        headers: {
            "Content-Type": `application/json`
        },
        body: JSON.stringify(dict)
    })
    .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        
      });
  }

  render() {
    if (this.state.complete) {
        return (
            <div className="card bg-dark shadow-sm task dimmed" key={this.props.data.id}>
                <div className="task-checkbox-area" onClick={this.handleClick} key={this.props.data.id}>
                    <a href="javascript:void(0);" role="button"><i className="fas fa-check-circle"></i></a>
                </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
        </div>
        )
    }
    return (
        <div className="card bg-dark shadow-sm task" key={this.props.key}>
            <div className="task-checkbox-area" onClick={this.handleClick} key={this.props.key}>
            <a href="javascript:void(0);" role="button" data-target=".task" aria-hidden="true"><i className="far fa-circle"></i></a>
            </div>  
            <div className="task-text-area">
                <span className="card-text">{this.props.data.content}</span>
            </div>
        </div>
    )
  }
}


export default Task;
