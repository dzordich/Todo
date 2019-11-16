import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";
import AddBoard from "./AddBoard"
import Cookies from 'js-cookie';
import { HotKeys } from "react-hotkeys";


const PAGE_USER = document.querySelector('#loggedIn').dataset['username'];
const USER_URI = `/api/v1/user/${PAGE_USER}`

const BOARDS_ENDPOINT = `api/v1/board/?user=${encodeURIComponent(PAGE_USER)}`

class App extends React.Component {
    constructor(props) {
      super(props);
      this.onSubmit = this.onSubmit.bind(this);
      this.state = {
        loaded: false,
        boards: []
      };
    }
    keyMap = {
      NEW_
    }
    componentDidMount() {
      // let csrftoken = Cookies.get('csrftoken');
      fetch(BOARDS_ENDPOINT)
        .then(response => {
          return response.json();
        })
        .then(data => this.setState({ boards: data.objects, loaded: true }));
    }
    onSubmit(name) {
      let b = {
        "name": name,
        "user": USER_URI
      }
      let csrftoken = Cookies.get('csrftoken');
      fetch('api/v1/board/', {
        method: 'POST',
        headers: {
          "Content-Type": `application/json`,
          "X-CSRFToken": csrftoken
        },
        body: JSON.stringify(b)
      }).then(res => res.json())
      .then((data) => {
        let boards = this.state.boards;
        boards.push(data);
        this.setState({ boards: boards });
      })
    }
    render() {
      if (!this.state.loaded) {
        return (
          <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>
          );
      }
      return (
        <div className="no-wrap-flex">
          {this.state.boards.map((t) => <div className="board-container" key={t.id}><Board data={t} resourceURI={t.resource_uri} userURI={t.user.resource_uri} /></div> )}
          <div className="board-container"><AddBoard onSubmit={this.onSubmit} /></div>
        </div>
      )
    }
  }


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
