import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      quote : ''
    }
  }
  getAdvice = () => {
    fetch('https://free-quotes-api.herokuapp.com/')
      .then(response => response.json())
      .then(quote => this.setState({quote : quote.quote}));
  }
  componentDidMount() {
    this.getAdvice();
  }
  render() {
    const {quote} = this.state;
    return(
      <div className='App'>
        <div className='adviceBox'>
          <h2> {quote} </h2>
          <button className="generator f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black" onClick={this.getAdvice}>
            <span> Get Another Advice </span>
          </button>
        </div>

      </div>
    )
  }
}

export default App;
