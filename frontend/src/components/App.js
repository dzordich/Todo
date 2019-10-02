import React, { Component } from "react";
import ReactDOM from "react-dom";

import DataProvider from "./DataProvider";
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
    // componentDidMount() {
    //   // let csrftoken = Cookies.get('csrftoken');
    //   fetch(this.props.endpoint)
    //     .then(response => {
    //       if (response.status !== 200) {
    //         return this.setState({ placeholder: "Something went wrong" });
    //       }
    //       return response.json();
    //     })
    //     .then(data => this.setState({ data: data, loaded: true }));
    // }
    render() {
      return (
        <DataProvider endpoint={BOARDS_ENDPOINT} 
        render={data => <Board data={data} resourceURI={data.resource_uri} userURI={data.user.resource_uri} />} />
      );
    }
  }


const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;
