import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Board from "./Board";



class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = {
      };
    }
  
    handleClick(e) {
      event.target.parentElement.className += 'dimmed';
    }
  
    render() {
      return (
        <DataProvider endpoint="api/v1/board/1" 
        render={data => <Board data={data} onClick={this.handleClick} resourceURI={data.resource_uri} userURI={data.user.resource_uri} />} />
      );
    }
  }


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
