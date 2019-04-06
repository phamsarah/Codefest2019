import React, { Component } from 'react';
import './App.css';
import '../src/horizontalLine/xAxis.css';


class App extends Component {
  render() {
    return (
  <div class = 'holder'>
      <div class='container'>
         <button class='pulse'>
         </button>
      </div>

      <div class = 'xAxis'></div>

      <div class = 'yAxis'></div>

      <div class = 'nonfactual'>
         <p>Nonfactual</p>
      </div>

      <div class = 'factual'>
         <p>Factual</p>
      </div>

      <div class = 'credible'>
          <p>Credible</p>
      </div>

      <div class = 'notCredible'>
          <p>Not Credible</p>
      </div>
      

  </div>
  
    );
  }
}

export default App;
