import React, { Component } from "react";
import PropTypes from "prop-types";
// import Cookies from 'js-cookie';

class DataProvider extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  };
  state = {
      data: [],
      loaded: false,
      placeholder: "Loading..."
    };
  componentDidMount() {
    // let csrftoken = Cookies.get('csrftoken');
    fetch(this.props.endpoint)
      .then(response => {
        if (response.status !== 200) {
          return this.setState({ placeholder: "Something went wrong" });
        }
        return response.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }
  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) :  <div className="spinner-border text-primary" role="status"><span className="sr-only">Loading...</span></div>;
  }
}
export default DataProvider;
