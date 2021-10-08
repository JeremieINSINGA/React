import React from "react";
import './App.css';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeworks: "",
      loading: true,
      error: null
    }
  }
  
  componentDidMount() {
    this.doHomework()
      .then(result => {
        this.setState({
          homeworks: result,
          loading: false,
        });
    }).catch((err) => {
      this.setState({
        error: err,
        loading: false,
      });
    });
  }

  doHomework() {
    const fatigue = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (fatigue) {
          reject("Je n'ai pas fait mes devoirs...");
        } else {
          resolve("J'ai fait mes devoirs !");
        }
      }, 3000);
    })
  }

  render() {
    console.error(this.state.error);
    if (this.state.loading) {
      return (
        <div className="d-flex justify-content-center ">
          <div className="spinner-border text-primary" role="status"/>
        </div>
      );
    } else if(this.state.error) {
      return <p className="text-center text-danger">{this.state.error}</p>
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              {this.state.homeworks}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      );
    }
  }
}