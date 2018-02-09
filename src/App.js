import React, { Component } from 'react';
import Simonbuttons from './components/Simonbuttons/simonButtons';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <div class="header">
            <p>Thou shalt do as simon says.</p>
        </div>
        <div class="gameStart">
          <p></p>

        </div>

        <div class ="gameBoard">
          <Simonbuttons/>

        </div>
        
      </div>
    );
  }
}

export default App;
