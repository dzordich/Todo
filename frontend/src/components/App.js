import React, { Component } from "react";
import ReactDOM from "react-dom";
import Board from "./Board";

const PAGE_USER = document.querySelector('#loggedIn').dataset['username'];

const BOARDS_ENDPOINT = `api/v1/board/?user=${encodeURIComponent(PAGE_USER)}`

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loaded: false,
        boards: []
      };
    }
    componentDidMount() {
      // let csrftoken = Cookies.get('csrftoken');
      fetch(BOARDS_ENDPOINT)
        .then(response => {
          return response.json();
        })
        .then(data => this.setState({ boards: data.objects, loaded: true }));
    }
    render() {
      if (!this.state.loaded) {
        return (
          <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>
          );
      }
      return (
        this.state.boards.map((t) => <div className="board-container" key={t.id}><Board data={t} resourceURI={t.resource_uri} userURI={t.user.resource_uri} /></div> )
      )
        // return (
        //   <DataProvider endpoint={BOARDS_ENDPOINT} 
        //     render={(data) => data.objects.map((t) => <div className="board-container" key={t.id}><Board data={t} resourceURI={t.resource_uri} userURI={t.user.resource_uri} /></div> )} />
        // );
    }
  }


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
