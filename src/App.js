import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewComponent from './NewComponent';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Cute cat',
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState() {
    this.setState({
      name: 'Little cute cat',
    })
  }

  resetState() {
    this.setState({
      name: 'Cute cat',
    })
  }

  render() {
    return (
      <div className="App-body">
        <header className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Cats</h1>
          <NewComponent></NewComponent>
        </header>
        <main className="App-main">
          {this.state.name}
          <section>
            <button className="App-button" onClick={this.changeState}>Change state</button>
            <button className="App-button" onClick={this.resetState}>Reset state</button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
